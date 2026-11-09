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
    name: 'nicerwave',
    tagline: 'Social app for real friends',
    logoKey: 'nicerwave',
    accent: '#3aa0ff',
    gradient: 'linear-gradient(145deg, #0a2a6c 0%, #2f6bff 40%, #e01fd0 100%)',
    articles: [
      {
        id: 'create-account',
        category: 'Getting Started',
        title: 'How to create a nicerwave account',
        description: 'Complete registration walkthrough on iOS, Android, and web with initial profile setup.',
        steps: [
          'Download nicerwave from the App Store or Google Play, or open the app on your device.',
          'Click or tap "Sign Up" and provide your mobile number, email, or Nicer number to register.',
          'Verify your account via the one-time code sent to your phone or inbox.',
          'Choose your unique @username, upload a profile photo, and add your bio.',
          'Set up your two-step PIN under Account Settings for enhanced protection.'
        ],
        tips: [
          'Already have a Nicer number from nicerapp? You can use it to sign in to nicerwave instantly.',
          'Your feed is friends-first: start by following the people you know and love.',
          'You can update your display name and profile picture at any time in Settings.'
        ]
      },
      {
        id: 'delete-account',
        category: 'Account & Privacy',
        title: 'How to delete or deactivate your nicerwave account',
        description: 'Understand the difference between temporary deactivation and permanent account deletion.',
        steps: [
          'Open nicerwave on mobile or web and tap your profile avatar.',
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
        title: 'Using Nicer AI Plus inside nicerwave chats',
        description: 'How to write, generate images, translate, and export documents directly inside your conversations.',
        steps: [
          'Open any chat or group conversation in nicerwave.',
          'Tap the Nicer AI Plus icon or type @ai to summon the assistant.',
          'Ask questions, request draft text, or ask for image generation.',
          'Request document generation to export research or notes as PDF or Word documents directly.'
        ],
        tips: [
          'Nicer AI Plus is free to start for all nicerwave users.',
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
          'nicerwave runs pre-feed automated content screening to block explicit material.',
          'External links opened in nicerwave pass through an automatic safety check to warn against phishing.'
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
];
