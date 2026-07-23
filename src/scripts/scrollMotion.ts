function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

declare global {
  interface Window {
    __nicleMotion?: boolean;
  }
}

if (window.__nicleMotion) {
  // already initialized
} else {
  window.__nicleMotion = true;
  bootMotion();
}

function bootMotion() {
  initScrollProgress();
  initScrollMotion();
  initStaggerGroups();
  initMagneticButtons();
  initTiltCards();
  initLinkRipple();
  initHashFocus();
  initDetailsMotion();
  // Prepare reveals before motionReady so above-fold content never flashes white
  initImageReveal();
  initRevealObserver();
}

function isCoarsePointer(): boolean {
  return window.matchMedia('(pointer: coarse)').matches;
}

function isNearViewport(el: Element): boolean {
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight;
  // Treat as above-the-fold if any part sits in (or just under) the viewport
  return rect.top < vh * 0.97 && rect.bottom > 0;
}

function revealElement(el: HTMLElement) {
  el.classList.add('scrollRevealed');
  if (el.hasAttribute('data-stagger')) {
    el.classList.add('staggerActive');
  }
}

function initScrollProgress() {
  const bar = document.querySelector<HTMLElement>('[data-scroll-progress]');
  if (!bar) return;

  let ticking = false;

  function update() {
    ticking = false;
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    const progress = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;
    bar!.style.transform = `scaleX(${progress})`;
  }

  window.addEventListener(
    'scroll',
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    },
    { passive: true }
  );

  update();
}

function initScrollMotion() {
  const header = document.querySelector('[data-header]');
  const hero = document.querySelector('[data-hero]');
  const heroContent = document.querySelector('[data-hero-content]');
  const parallaxEls = document.querySelectorAll('[data-parallax]');
  const allowParallax = !prefersReducedMotion() && !isCoarsePointer();

  let ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;

    requestAnimationFrame(() => {
      const scrollY = window.scrollY;

      if (header) {
        header.classList.toggle('headerScrolled', scrollY > 24);
      }

      if (allowParallax && hero && heroContent) {
        const heroHeight = hero.clientHeight || 600;
        const progress = Math.min(scrollY / heroHeight, 1);
        const contentY = scrollY * 0.28;
        const contentScale = 1 - progress * 0.06;
        const contentOpacity = Math.max(1 - progress * 0.55, 0);

        (heroContent as HTMLElement).style.transform =
          `translate3d(0, ${contentY}px, 0) scale(${contentScale})`;
        (heroContent as HTMLElement).style.opacity = String(contentOpacity);
      }

      if (allowParallax) {
        parallaxEls.forEach((el) => {
          const speed = parseFloat(el.getAttribute('data-parallax') ?? '0.2');
          (el as HTMLElement).style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
        });
      }

      ticking = false;
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function isMobileViewport(): boolean {
  return window.matchMedia('(max-width: 900px)').matches || isCoarsePointer();
}

function initRevealObserver() {
  const revealEls = document.querySelectorAll<HTMLElement>('[data-scroll-reveal]');
  if (!revealEls.length) {
    document.documentElement.classList.add('motionReady');
    return;
  }

  // Mobile / touch: show everything immediately — no white flash while scrolling
  if (prefersReducedMotion() || isMobileViewport()) {
    revealEls.forEach((el) => revealElement(el));
    document.documentElement.classList.add('motionReady');
    return;
  }

  // Mark above-the-fold content revealed BEFORE enabling hide styles,
  // so write-ups never flash white on first paint.
  revealEls.forEach((el) => {
    if (isNearViewport(el)) revealElement(el);
  });

  document.documentElement.classList.add('motionReady');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target as HTMLElement;
        revealElement(el);
        observer.unobserve(el);
      });
    },
    // Reveal early so content is visible as it enters the viewport
    { threshold: 0.01, rootMargin: '120px 0px 80px 0px' }
  );

  revealEls.forEach((el) => {
    if (!el.classList.contains('scrollRevealed')) observer.observe(el);
  });
}

function initStaggerGroups() {
  document.querySelectorAll('[data-stagger]').forEach((group) => {
    const children = group.querySelectorAll(':scope > *');
    children.forEach((child, i) => {
      const node = child as HTMLElement;
      if (!node.style.getPropertyValue('--staggerIndex')) {
        node.style.setProperty('--staggerIndex', String(i));
      }
    });
  });
}

function initMagneticButtons() {
  if (prefersReducedMotion() || isCoarsePointer()) return;

  document.querySelectorAll('.btnPrimary, .headerCta, .btnOutline').forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = (btn as HTMLElement).getBoundingClientRect();
      const x = ((e as MouseEvent).clientX - rect.left) / rect.width - 0.5;
      const y = ((e as MouseEvent).clientY - rect.top) / rect.height - 0.5;
      (btn as HTMLElement).style.transform = `translate(${x * 7}px, ${y * 5 - 2}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      (btn as HTMLElement).style.transform = '';
    });
  });
}

function initTiltCards() {
  if (prefersReducedMotion() || isCoarsePointer()) return;

  const selectors = [
    '[data-tilt]',
    '.featureCard',
    '.actionCard',
    '.productHelpCard',
    '.leaderCard',
    '.pillarCard',
    '.principleCard',
    '.useCard',
    '.infoBlock',
    '.newsCard',
    '.psFeatureCard',
    '.productCard',
  ].join(', ');

  document.querySelectorAll(selectors).forEach((card) => {
    const el = card as HTMLElement;
    if (el.dataset.tiltBound) return;
    el.dataset.tiltBound = 'true';
    el.classList.add('tiltReady');

    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = ((e as MouseEvent).clientX - rect.left) / rect.width;
      const y = ((e as MouseEvent).clientY - rect.top) / rect.height;
      const rotateY = (x - 0.5) * 8;
      const rotateX = (0.5 - y) * 8;
      el.style.setProperty('--tiltX', `${rotateX}deg`);
      el.style.setProperty('--tiltY', `${rotateY}deg`);
      el.style.setProperty('--tiltPx', `${(x * 100).toFixed(1)}%`);
      el.style.setProperty('--tiltPy', `${(y * 100).toFixed(1)}%`);
      el.classList.add('isTilting');
    });

    el.addEventListener('mouseleave', () => {
      el.classList.remove('isTilting');
      el.style.setProperty('--tiltX', '0deg');
      el.style.setProperty('--tiltY', '0deg');
    });
  });
}

function initImageReveal() {
  const images = document.querySelectorAll(
    '.cardVisual img, .psLogo, .leaderPhoto, .teamPhoto, .productFloat .productLogo'
  );
  if (!images.length || prefersReducedMotion()) return;

  // Mobile: never hide photos behind a late reveal
  if (isMobileViewport()) {
    images.forEach((img) => {
      img.classList.add('mediaReveal', 'mediaRevealed');
    });
    return;
  }

  images.forEach((img) => {
    img.classList.add('mediaReveal');
    if (isNearViewport(img)) img.classList.add('mediaRevealed');
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('mediaRevealed');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.01, rootMargin: '80px 0px 40px 0px' }
  );

  images.forEach((img) => {
    if (!img.classList.contains('mediaRevealed')) observer.observe(img);
  });
}

function initLinkRipple() {
  if (prefersReducedMotion()) return;

  document.querySelectorAll('.btnPrimary, .headerCta').forEach((btn) => {
    btn.classList.add('hasShine');
  });
}

function initHashFocus() {
  const hash = window.location.hash;
  if (!hash) return;

  const target = document.querySelector(hash);
  if (!target) return;

  const reduce = prefersReducedMotion();

  window.requestAnimationFrame(() => {
    target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    target.classList.add('hashFocus');
    window.setTimeout(() => target.classList.remove('hashFocus'), 1600);
  });
}

function initDetailsMotion() {
  if (prefersReducedMotion()) return;

  document.querySelectorAll('details').forEach((details) => {
    details.classList.add('motionDetails');
  });
}
