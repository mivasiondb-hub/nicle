import { createHash } from 'node:crypto';
import { readFile, readdir, writeFile } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

// Social-preview images and the like are far larger than anything a page displays.
const MAX_PRECACHE_BYTES = 300 * 1024;
const TEMPLATE = new URL('./sw.template.js', import.meta.url);

async function listFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const path = join(dir, entry.name);
      return entry.isDirectory() ? listFiles(path) : [path];
    })
  );
  return nested.flat();
}

function toUrl(file) {
  if (file === 'index.html') return '/';
  if (file.endsWith('/index.html')) return `/${file.slice(0, -'/index.html'.length)}`;
  return `/${file}`;
}

/** Writes dist/sw.js, which stores every page and the assets they reference on the device. */
export default function serviceWorker() {
  return {
    name: 'nicle-service-worker',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const root = fileURLToPath(dir);
        const files = await Promise.all(
          (await listFiles(root)).map(async (path) => ({
            file: relative(root, path).split(sep).join('/'),
            bytes: await readFile(path),
          }))
        );

        const source = files
          .filter(({ file }) => /\.(html|js)$/.test(file))
          .map(({ bytes }) => bytes.toString('utf8'))
          .join('\n');
        const isPrecached = ({ file, bytes }) => {
          if (file.endsWith('.html')) return true;
          return bytes.length <= MAX_PRECACHE_BYTES && source.includes(file.split('/').pop());
        };

        const precached = files.filter(isPrecached).sort((a, b) => a.file.localeCompare(b.file));
        const hash = createHash('sha256');
        for (const { file, bytes } of precached) hash.update(file).update(bytes);

        const template = await readFile(TEMPLATE, 'utf8');
        const output = template
          .replace('__VERSION__', hash.digest('hex').slice(0, 12))
          .replace('__PRECACHE_MANIFEST__', JSON.stringify(precached.map(({ file }) => encodeURI(toUrl(file)))));
        await writeFile(join(root, 'sw.js'), output);
      },
    },
  };
}
