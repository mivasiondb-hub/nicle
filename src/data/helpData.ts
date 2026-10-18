export interface HelpArticle {
  id: string;
  title: string;
  category: string;
  description: string;
  steps: string[];
  tips?: string[];
}

export interface HelpProduct {
  id: string;
  name: string;
  tagline: string;
  logoKey: string;
  accent: string;
  gradient: string;
  articles: HelpArticle[];
}

export const helpProducts: HelpProduct[] = [
  {
    id: 'nicerwave',
    name: 'NicerWave',
    tagline: 'Social app for real friends',
    logoKey: 'nicerwave',
    accent: '#6c5ce7',
    gradient: 'linear-gradient(145deg, #120e2a 0%, #6c5ce7 50%, #00d2ff 100%)',
    articles: [
      {
        id: 'create-account',
        category: 'Getting Started',
        title: 'How to create a NicerWave account',
        description: 'Complete registration walkthrough on iOS, Android, and web with initial profile setup.',
        steps: [
          'Download NicerWave from the App Store or Google Play, or open the app on your device.',
          'Click or tap "Sign Up" and provide your mobile number, email, or Nicer number to register.',
          'Verify your account via the one-time code sent to your phone or inbox.',
          'Choose your unique @username, upload a profile photo, and add your bio.',
          'Set up your two-step PIN under Account Settings for enhanced protection.'
        ],
        tips: [
          'Already have a Nicer number from nicerapp? You can use it to sign in to NicerWave instantly.',
          'Your feed is friends-first: start by following the people you know and love.',
          'You can update your display name and profile picture at any time in Settings.'
        ]
      },
      {
        id: 'delete-account',
        category: 'Account & Privacy',
        title: 'How to delete or deactivate your NicerWave account',
        description: 'Understand the difference between temporary deactivation and permanent account deletion.',
        steps: [
          'Open NicerWave on mobile or web and tap your profile avatar.',
          'Go to Settings > Account & Security.',
          'Scroll down to "Deactivate or Delete Account".',
          'Choose "Deactivate" to pause your profile or "Delete" to permanently remove all data.',
          'Confirm with your account password or PIN to finalize the request.'
        ],
        tips: [
          'Deletion is permanent and erases your posts, Stories, Vins, and direct messages.',
          'We do not sell your personal data, and deleting your profile removes your information from active servers.'
        ]
      },
      {
        id: 'vins-stories',
        category: 'Features & Media',
        title: 'Creating and sharing Stories, albums, and Vins',
        description: 'Learn how to capture moments, trim short videos, and share disappearing Stories.',
        steps: [
          'Tap the "+" create button on the navigation bar.',
          'Select "Story" for 24-hour disappearing photos with stickers and music.',
          'Select "Vin" to record or upload short video clips with sounds, trimming, and captions.',
          'Select "Post" to share single photos or multi-image swipeable albums with captions.',
          'Tap "Share" to publish to your friends-first feed.'
        ],
        tips: [
          'Use Vins Duet to collaborate creatively with other creators you follow.',
          'Stories expire automatically after 24 hours, but you can save them to Highlights on your profile.'
        ]
      },
      {
        id: 'nicer-ai-plus-in-chat',
        category: 'AI Assistant',
        title: 'Using Nicer AI Plus inside NicerWave chats',
        description: 'How to write, generate images, translate, and export documents directly inside your conversations.',
        steps: [
          'Open any chat or group conversation in NicerWave.',
          'Tap the Nicer AI Plus icon or type @ai to summon the assistant.',
          'Ask questions, request draft text, or ask for image generation.',
          'Request document generation to export research or notes as PDF or Word documents directly.'
        ],
        tips: [
          'Nicer AI Plus is free to start for all NicerWave users.',
          'You can generate multilingual translations instantly inside international group chats.'
        ]
      },
      {
        id: 'safety-moderation',
        category: 'Safety & Community',
        title: 'Reporting policy violations and safety tools',
        description: 'How content screening, safer links, and report & block protect your conversations.',
        steps: [
          'Tap the "..." menu icon next to any post, story, Vin, or message.',
          'Select "Report" and choose the reason (harassment, harmful content, or spam).',
          'Tap "Block" to prevent an account from seeing your feed or sending you messages.',
          'Visit the Safety Center in Settings to review your blocked profiles and active sessions.'
        ],
        tips: [
          'NicerWave runs pre-feed automated content screening to block explicit material.',
          'External links opened in NicerWave pass through an automatic safety check to warn against phishing.'
        ]
      }
    ]
  },
  {
    id: 'nicerapp',
    name: 'nicerapp',
    tagline: 'Encrypted private messaging',
    logoKey: 'nicerapp',
    accent: '#ED3542',
    gradient: 'linear-gradient(145deg, #3a0a10 0%, #ED3542 45%, #7c5cfc 100%)',
    articles: [
      {
        id: 'setup-encryption',
        category: 'Security & Safety',
        title: 'How end-to-end encryption works in nicerapp',
        description: 'Understand nicerapp’s security model, cryptographic keys, and safety numbers.',
        steps: [
          'Every message, photo, and voice memo sent via nicerapp is encrypted on your local device prior to transmission.',
          'The payload travels through Nicle servers in a fully sealed state, preventing server administrators from reading it.',
          'The recipient device decrypts the payload locally using their matching unique private security key.',
          'To verify active encryption keys, open a contact\'s details page, tap "Verify Safety Numbers", and compare the code strings.'
        ],
        tips: [
          'Nicle Inc does not hold, manage, or back up your private decryption keys on central servers. They never leave your phone.',
          'If your contact changes their phone or reinstalls nicerapp, you will receive a security alert that their safety number has changed.'
        ]
      },
      {
        id: 'backup-chats',
        category: 'Data Management',
        title: 'Creating and restoring encrypted backups',
        description: 'Safeguard your messages manually to protect chats when moving to a new device.',
        steps: [
          'Open nicerapp and navigate to Settings > Chat Configuration.',
          'Select "Encrypted Backups" and tap the "Generate Keys" button.',
          'Write down the generated 32-character backup recovery key. Keep this key in a secure physical location.',
          'Tap "Backup Now" to bundle your conversation database into a single encrypted archive file.',
          'Save the archive to your local file system, an external SD card, or upload it to your personal secure cloud drive.'
        ],
        tips: [
          'If you lose your 32-character recovery key, Nicle cannot reset it or recover your chats. The key is the only decryption tool.',
          'When restoring on a new device, click "Import Backup" on the initial registration screen and enter your key.'
        ]
      },
      {
        id: 'group-privacy',
        category: 'Group Conversations',
        title: 'Managing permissions in private groups',
        description: 'Understand roles, invitation policies, and admin settings for encrypted groups.',
        steps: [
          'Navigate to your active group conversation, tap the header to open Group Info, and select "Admin Settings".',
          'Toggle "Restricted Invites" if you only want administrators to have the permission to add new members.',
          'Configure "Admin Approvals" to force approval requests when new users attempt to join using invite URLs.',
          'Select "Admin List" to promote trusted group participants to moderators, allowing them to delete messages and manage invites.',
          'Revoke or update active Group Invite Links if unauthorized individuals acquire access to them.'
        ],
        tips: [
          'All group conversations are encrypted under the same parameters as individual private chats.',
          'Group chat sizes are capped at 500 members to maintain optimal connection speeds across encrypted channels.'
        ]
      },
      {
        id: 'disappearing-messages',
        category: 'Security & Safety',
        title: 'Configuring disappearing message timers',
        description: 'Set conversations to self-destruct automatically after a pre-selected duration.',
        steps: [
          'Open the specific chat conversation where you want to adjust message lifetime.',
          'Tap the contact\'s profile name at the top of the interface to open Chat Options.',
          'Select "Disappearing Messages" from the settings list.',
          'Choose a self-destruct timer (options range from 30 seconds, 1 hour, 24 hours, up to 7 days).',
          'Tap "Save". All messages sent after this point will delete themselves once the timer expires.'
        ],
        tips: [
          'The self-destruct countdown timer starts for each message once the recipient marks it as read.',
          'Disappearing settings apply to both participants in a chat. Either user can update or disable the timer at any time.'
        ]
      },
      {
        id: 'media-storage',
        category: 'Data Management',
        title: 'Managing local storage and media download settings',
        description: 'Save disk space and manage mobile data consumption by restricting media downloads.',
        steps: [
          'Navigate to Settings > Storage & Data inside nicerapp.',
          'Under Media Auto-Download, specify whether files (photos, audio, videos) download on mobile data, Wi-Fi, or never.',
          'Tap "Manage Device Storage" to see an explicit breakdown of which chats are using the most storage.',
          'Use the batch-selection tool to delete massive attachments, shared videos, or document packages you no longer need.',
          'Toggle "Save to Gallery" off to prevent downloaded media from copying into your phone\'s default camera roll.'
        ],
        tips: [
          'If you delete media from your nicerapp storage and do not have a backup, it is permanently erased.',
          'Voice memos are always downloaded automatically to ensure critical conversational flows remain responsive.'
        ]
      }
    ]
  },
  {
    id: 'mivasion',
    name: 'Mivasion',
    tagline: 'Creative AI video studio',
    logoKey: 'mivasion',
    accent: '#5b7cfa',
    gradient: 'linear-gradient(145deg, #101c3d 0%, #5b7cfa 50%, #7c5cfc 100%)',
    articles: [
      {
        id: 'generate-video',
        category: 'Creation Studio',
        title: 'How to generate cinematic AI videos',
        description: 'Complete prompt engineering and setup guide to render high-definition videos.',
        steps: [
          'Access your Mivasion dashboard and select "Create Video Project".',
          'Write a detailed visual prompt. Describe physical details, camera lenses (e.g. "50mm lens"), movement patterns, and color tones.',
          'Select your canvas aspect ratio: 16:9 for presentations, 1:1 for social feeds, or 9:16 for vertical mobile displays.',
          'Adjust generation sliders: set Motion Intensity (0-100) and choose a cinematic style preset (e.g. Anime, Realistic, 3D Render).',
          'Choose your target rendering speed (Fast Preview or High-Definition Render) and click the "Generate Video" button.'
        ],
        tips: [
          'Include negative prompts (e.g. "deformed, low quality, shaky camera") to filter out bad visual textures.',
          'If you want consistent character faces, upload a reference profile photo using the FaceLock template before generating.'
        ]
      },
      {
        id: 'commercial-licensing',
        category: 'Legal & Usage',
        title: 'Commercial usage policies and licenses',
        description: 'Learn about ownership laws and monetization models for assets rendered inside Mivasion.',
        steps: [
          'Any visual asset, video file, or audio track rendered on your active account is completely owned by you.',
          'Nicle Inc retains zero copyright claims, license tags, or royalty requests on your generated outputs.',
          'You are granted a perpetual, worldwide, commercial license to distribute, sell, or broadcast Mivasion outputs.',
          'These guidelines apply to both free trial tiers and active premium subscriptions.'
        ],
        tips: [
          'You are legally responsible for checking that your prompts or source images do not violate active copyright properties.',
          'Formal licensing certifications for individual rendering tasks can be generated from your Project History console.'
        ]
      },
      {
        id: 'api-integration',
        category: 'Developer Center',
        title: 'Setting up API pipelines and webhooks',
        description: 'Programmatically request video renders and configure automated delivery hooks.',
        steps: [
          'Log in to the Nicle Developer Center and register a new project integration.',
          'Acquire your unique API Key and Secret Token. Keep your credentials private.',
          'Configure a POST request targeting the endpoint `https://api.mivasion.com/v1/video/generate` with your parameters.',
          'Set up webhooks inside your console to receive POST notifications when video processing finishes.',
          'Parse the webhook response payload to retrieve the optimized CDN download URL for the compiled MP4 file.'
        ],
        tips: [
          'Our sandbox endpoint does not consume production API credits but generates watermarked, low-resolution test previews.',
          'Verify your project limits and billing rules under Settings > API Dashboard to prevent request throttling.'
        ]
      },
      {
        id: 'video-upscaling',
        category: 'Creation Studio',
        title: 'Upscaling visual resolution and frame rates',
        description: 'Increase video quality from preview resolution to 4K definition and adjust frame rates.',
        steps: [
          'Go to your Project Library and select the video clip you want to enhance.',
          'Click the "Upscale Video" button from the media options toolbar.',
          'Choose your resolution scaling level: 1080p HD, 2K, or 4K Ultra HD.',
          'Select frame rate enhancement settings: toggle interpolation to increase frame rates from 24fps to 60fps.',
          'Click "Apply Upscaling". The AI models will process the file, which can take up to 5 minutes depending on load.'
        ],
        tips: [
          'Upscaling consumes standard rendering tokens based on the output duration and target resolution.',
          'Interpolation creates synthetic frames, which works best for slow-motion or smooth panning shots.'
        ]
      },
      {
        id: 'image-to-video',
        category: 'Creation Studio',
        title: 'Generating video from static images (Image-to-Video)',
        description: 'Animate photos, sketches, or graphics using visual motion prompts.',
        steps: [
          'Click "Create Video Project" and select the "Image-to-Video" workspace tab.',
          'Upload a clean, high-resolution source image (JPEG or PNG, up to 15MB).',
          'Describe the motion you want to occur in the prompt box (e.g. "waves crashing on the beach, clouds moving slowly").',
          'Use the "Camera Control" pad to choose panning, zoom levels, or tilt parameters.',
          'Select your clip length (4 or 8 seconds) and click "Generate".'
        ],
        tips: [
          'Ensure the uploaded image aspect ratio matches your target project layout canvas to prevent cropping.',
          'Start with low Motion Intensity values (e.g. 30) for portrait animations to avoid facial distortions.'
        ]
      }
    ]
  },
  {
    id: 'niceraiplus',
    name: 'nicer ai plus',
    tagline: 'Conversational AI assistant',
    logoKey: 'niceraiplus',
    accent: '#7c5cfc',
    gradient: 'linear-gradient(145deg, #1a0f3d 0%, #7c5cfc 40%, #5b7cfa 100%)',
    articles: [
      {
        id: 'document-analysis',
        category: 'Assistant Features',
        title: 'How to upload and analyze document files',
        description: 'Extract summaries, translate files, or query information from major document formats.',
        steps: [
          'Open your nicer ai plus conversation portal and click on the attachment paperclip icon next to the input field.',
          'Select your target file from your storage folder (supported types include PDF, DOCX, CSV, and XLSX formats).',
          'Wait for the file progress bar to finish loading and verify the green attachment bubble appears.',
          'Provide clear, explicit instructions (e.g. "Extract all action items from this transcript and format them as a table").',
          'Press Enter. nicer ai plus will parse your file contents and output the response in seconds.'
        ],
        tips: [
          'File uploads are capped at 50MB per document. For large datasets, split the files prior to uploading.',
          'Any text extracted or uploaded is processed in a secure session and is never utilized for public training pipelines.'
        ]
      },
      {
        id: 'voice-synthesizer',
        category: 'Assistant Features',
        title: 'Configuring real-time voice speech parameters',
        description: 'Engage in natural voice conversations and select voice avatars.',
        steps: [
          'Tap the microphone icon next to the chat bar inside the nicer ai plus interface.',
          'Grant microphone access to the browser if prompted by your system privacy manager.',
          'Speak your prompt naturally. You will see a live text transcription preview.',
          'Tap the stop button or pause speaking to submit the query to the assistant.',
          'To select your voice, click Settings > Voice Profiles and choose from the list of custom voice models.'
        ],
        tips: [
          'We recommend using headphones in noisy environments to avoid background interference during voice detection.',
          'You can configure the voice speed (0.75x to 1.5x) to suit your listening preferences.'
        ]
      },
      {
        id: 'custom-prompts',
        category: 'Advanced Usage',
        title: 'Saving and sharing custom prompt templates',
        description: 'Set up reusable prompt instructions to speed up routine writing, coding, or translation tasks.',
        steps: [
          'Click on the "Prompt Library" link in the sidebar menu.',
          'Select "Add New Prompt Template".',
          'Give your prompt a memorable name and define variables using brackets (e.g., "Translate this text into {target_language}").',
          'Save the template. It will now show up inside your personal prompt list.',
          'In any chat, type a forward slash ("/") followed by your template name to load the saved instructions.'
        ],
        tips: [
          'You can share your templates with other workspace members if you have an active team subscription.',
          'Use clear variables in your prompts to ensure consistency when processing different text blocks.'
        ]
      },
      {
        id: 'code-debugging',
        category: 'Advanced Usage',
        title: 'Writing and debugging software code',
        description: 'Generate scripts, debug syntax errors, or translate code across programming languages.',
        steps: [
          'Describe the code you want to build (e.g., "Write a Python script that parses CSV rows and sends email reports").',
          'Specify the programming language, framework versions, and database systems to use.',
          'To debug existing code, paste the script inside a code block and paste the explicit error traces below it.',
          'Ask nicer ai plus to explain the bugs, correct the logic, and write automated tests for the code.',
          'Review the output and copy clean, formatted snippets directly from the code window.'
        ],
        tips: [
          'Use markdown formatting (triple backticks) when pasting code to maintain indentation and improve readability.',
          'nicer ai plus can also explain complex algorithms or legacy code blocks in plain English.'
        ]
      },
      {
        id: 'enterprise-workspace',
        category: 'Advanced Usage',
        title: 'Managing enterprise workspace teams and security policies',
        description: 'Configure member roles, set data retention policies, and view usage dashboards.',
        steps: [
          'Log in to the Admin Dashboard and select "Workspace Settings".',
          'Navigate to the "Members" tab to invite employees, assign roles (Admin, Member), or remove users.',
          'Go to the "Security & Data Policies" panel to set message retention limits (e.g., auto-delete history after 90 days).',
          'Configure SSO (Single Sign-On) integration to authenticate team access using your existing company credentials.',
          'Open the "Usage Reports" dashboard to monitor token consumption, active users, and model distributions.'
        ],
        tips: [
          'Only team administrators can access Billing and API integration panels.',
          'Workspace data is encrypted at rest using enterprise-grade AES-256 protocols.'
        ]
      }
    ]
  },
  {
    id: 'chatnicer',
    name: 'Chatnicer',
    tagline: 'Photos, Reels, and Stories sharing',
    logoKey: 'chatnicer',
    accent: '#f3a13c',
    gradient: 'linear-gradient(145deg, #3d240f 0%, #f3a13c 50%, #ED3542 100%)',
    articles: [
      {
        id: 'upload-reels',
        category: 'Content Sharing',
        title: 'Uploading photos, Stories, and Reels',
        description: 'Create and publish visual content with filters, audio tags, and descriptions.',
        steps: [
          'Launch the Chatnicer application and tap the "+" creation icon in the center of the navigation bar.',
          'Select your content layout target: Post, Story, or Reel.',
          'Select media files from your phone gallery or capture new ones using the built-in camera.',
          'Add audio tracks by tapping the Music icon, search for songs, and adjust the audio segment slider.',
          'Write a description caption, include hashtag keywords, tag profiles, and tap "Publish".'
        ],
        tips: [
          'Stories expire and hide automatically after 24 hours. Reels are permanently shown on your video tab.',
          'For high-definition video processing, enable "High Quality Uploads" in Settings > Media Quality.'
        ]
      },
      {
        id: 'story-privacy',
        category: 'Safety & Audience',
        title: 'Audience privacy and Close Friends controls',
        description: 'Set who can view your daily story uploads and configure list members.',
        steps: [
          'Go to your Profile settings and tap "Story Audience Privacy".',
          'Choose your default audience visibility: Everyone, Followers, or Close Friends Only.',
          'To set up a custom viewing list, click the "Close Friends" tab.',
          'Search for usernames, select profiles you want to include, and click "Save List".',
          'When posting a Story, tap the green Close Friends badge at the bottom of the publisher.'
        ],
        tips: [
          'Profiles you add to your Close Friends list are never notified of the change.',
          'Your Close Friends stories are marked with a green outer ring on their home dashboard.'
        ]
      },
      {
        id: 'report-content',
        category: 'Safety & Audience',
        title: 'Reporting policies, violations, and blocking profiles',
        description: 'Flag inappropriate media, report comment spam, or block abusive profiles.',
        steps: [
          'To report any post or comment, click the options icon ("...") and choose "Report".',
          'Pick the violation reason (e.g. Hate Speech, Intellectual Property, Spam).',
          'Our moderation desk will verify the report within 24 hours and apply penalties if required.',
          'To block a profile completely, open their page, tap their settings menu, and select "Block User".',
          'Confirm your choice. Blocked users cannot lookup your profile, message you, or see your posts.'
        ],
        tips: [
          'All reports are kept anonymous; reported profiles will not know who flagged their updates.',
          'Blocking a profile automatically blocks any secondary accounts they attempt to create under their device.'
        ]
      },
      {
        id: 'direct-messages',
        category: 'Content Sharing',
        title: 'Managing direct messages and group chats',
        description: 'Send text, media, and voice notes securely and manage chat settings.',
        steps: [
          'Tap the paper airplane icon in the top right corner of the home feed.',
          'Search for a username or select a contact from your chat list.',
          'Type a message, record a voice note, or attach media files using the camera icon.',
          'To create a group chat, click the compose icon, select multiple contacts, and tap "Create Group".',
          'Customize group chat options by naming the thread, changing the cover photo, or adding administrators.'
        ],
        tips: [
          'You can set messages to "View Once" so they delete immediately after the recipient opens them.',
          'Mute specific conversations if you want to stop receiving push notifications for new messages.'
        ]
      },
      {
        id: 'profile-verification',
        category: 'Safety & Audience',
        title: 'Requesting a verified profile checkmark',
        description: 'Learn the eligibility requirements and application steps for account verification.',
        steps: [
          'Go to Settings > Account > Request Verification.',
          'Confirm your account meets eligibility criteria (active, complete profile, public, and notable).',
          'Enter your full name and upload a copy of an official identification document (e.g., passport, driver\'s license).',
          'Provide links to news articles, press releases, or social profiles that demonstrate your public interest.',
          'Tap "Submit" to send your application to our account team for review.'
        ],
        tips: [
          'Verification reviews take up to 14 business days. You will receive a notification with our decision.',
          'Submitting false documents will result in immediate account suspension.'
        ]
      }
    ]
  }
];
