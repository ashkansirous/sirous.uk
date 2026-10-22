/**
 * Product catalogue for the portal.
 *
 * Every entry in `products` renders as a home-page card and gets its own page at
 * `/<slug>/` (see `src/pages/[slug].astro`). `reservedSlot` is the dashed
 * placeholder shown after the last product. Screenshots live in
 * `src/assets/products/` and go through `astro:assets`.
 */
import rtstShot from '../assets/products/read-the-stupid-text.png';
import lcmShot from '../assets/products/lets-call-mom.png';
import dinoShot from '../assets/products/dino-reader.png';

export type ProductStatus = 'live' | 'testing' | 'reserved';
export type PlatformStatus = 'live' | 'testing';
export type ScreenshotFit = 'bleed' | 'float';
export type PanelKey = 'rtst' | 'lcm' | 'dino';

export interface Platform {
  name: string;
  status: PlatformStatus;
  note: string;
  url?: string;
}
export interface Feature {
  title: string;
  body: string;
}
/** An AI call-out shown prominently on the product page. */
export interface Highlight {
  kicker: string;
  title: string;
  body: string;
}
export interface ProductLink {
  label: string;
  url: string;
  primary?: boolean;
}

export interface Product {
  slug: string;
  /** Two-digit index shown in the card meta row, e.g. "01". */
  index: string;
  status: ProductStatus;
  name: string;
  tagline: string;
  description: string;
  url: string;
  /** Bare URL shown as text on the card. */
  displayUrl: string;
  screenshot: ImageMetadata;
  screenshotAlt: string;
  /** `bleed` (default) runs off the panel's bottom edge; `float` sits inside it. */
  screenshotFit?: ScreenshotFit;
  /** Picks the panel colour token. */
  panel: PanelKey;
  platforms: Platform[];
  features: Feature[];
  highlights?: Highlight[];
  /** Heading above `highlights` on the product page; defaults to "Highlights". */
  highlightsTitle?: string;
  stack: string[];
  links: ProductLink[];
  /** Short panel label on the home-page card; falls back to the status text. */
  audience?: string;
}

/** The dashed placeholder that follows the last product. */
export interface ReservedSlot {
  index: string;
  status: 'reserved';
  name: string;
  description: string;
  slotLabel: string;
}

const RTST_REPO = 'https://github.com/ashkansirous/ReadTheStupidText';

export const products: Product[] = [
  {
    slug: 'read-the-stupid-text',
    index: '01',
    status: 'live',
    name: 'Read The Stupid Text',
    tagline: 'Reads any text aloud in a natural voice, offline, at your speed.',
    description:
      'Select or copy text, press Ctrl+Win+R, or open a file, and it reads it aloud in a natural on-device neural voice at any speed from 0.5x to 2x. A Windows tray app on the Microsoft Store, with Android and iPhone apps that read a page straight from the camera. Nothing you read leaves the device.',
    url: 'https://readthestupidtext.sirous.uk/',
    displayUrl: 'readthestupidtext.sirous.uk',
    screenshot: rtstShot,
    screenshotAlt:
      'The Read The Stupid Text tray control panel showing the current read, play and skip buttons, 1.5x speed, the Momonga voice and an activity log.',
    screenshotFit: 'float',
    panel: 'rtst',
    audience: 'On the Microsoft Store',
    platforms: [
      {
        name: 'Windows 11',
        status: 'live',
        note: 'Live on the Microsoft Store.',
        url: 'https://apps.microsoft.com/detail/9NGT1BN1H92V',
      },
      {
        name: 'Android',
        status: 'testing',
        note: 'Google Play closed testing, and a direct APK.',
        url: 'https://readthestupidtext.sirous.uk/download',
      },
      {
        name: 'iPhone and iPad',
        status: 'testing',
        note: 'TestFlight. Ships from CI; testers are added in App Store Connect.',
      },
    ],
    features: [
      {
        title: 'Three ways in',
        body: 'Auto-read on selection, auto-read on copy, or the global hotkey Ctrl+Win+R. Works from any app, including the terminal (copy or hotkey).',
      },
      {
        title: 'Natural neural voices on the device',
        body: 'Supertonic-3 through sherpa-onnx (ten English voices, e.g. "Momonga"), Piper for Farsi, MeloTTS for Chinese. Voice packs download once (~145 MB); the built-in system voice reads until the pack arrives; fully offline afterwards.',
      },
      {
        title: 'Speed and control',
        body: 'Speed 0.5x to 2x, changed live mid-read, with presets; skip 10 s back or forward; a read-through timer; a voice swap that continues the current read.',
      },
      {
        title: 'Reads files',
        body: 'Reads uploaded .txt, .pdf and .docx files.',
      },
      {
        title: 'Tray control panel',
        body: 'A "media card" with waveform, progress, speed pill, voice and language pickers, a draggable window, and an activity log that explains every read.',
      },
      {
        title: 'Nine languages',
        body: 'Voices and interface in English, Farsi, French, Spanish, Portuguese, Chinese, Arabic, Russian and Japanese, with right-to-left layout for Farsi and Arabic, on Windows, Android and iOS.',
      },
      {
        title: 'On-device translation',
        body: '"Translate to my language" turns any selected, copied, scanned or opened text into your language before it is read (Windows and Android). The text language is auto-detected.',
      },
      {
        title: 'Phone camera and scanner',
        body: 'Point the camera at a page or use the multi-page document scanner; text is recognised on the phone (ML Kit, and downloaded PaddleOCR models for Arabic, Farsi, Russian, Chinese, Japanese).',
      },
      {
        title: 'Head start',
        body: 'The first sentences are prepared while you look at the text, and heard sentences are cached, so reading starts almost instantly.',
      },
      {
        title: 'Private by design',
        body: 'No account, no telemetry; text, files and scans never leave the device.',
      },
    ],
    stack: [
      '.NET 10',
      'C#',
      'WinUI 3 + Windows App SDK (packaged MSIX)',
      '.NET MAUI (Android, iOS)',
      'sherpa-onnx + Supertonic-3 / Piper / MeloTTS (ONNX Runtime)',
      'ML Kit and PaddleOCR on device',
      'Git-tagged releases from GitHub Actions to the Microsoft Store, Google Play and TestFlight',
      'Landing site on a Cloudflare Worker',
    ],
    links: [
      {
        label: 'Microsoft Store',
        url: 'https://apps.microsoft.com/detail/9NGT1BN1H92V',
        primary: true,
      },
      { label: 'Android download', url: 'https://readthestupidtext.sirous.uk/download' },
      { label: 'GitHub', url: RTST_REPO },
    ],
  },
  {
    slug: 'lets-call-mom',
    index: '02',
    status: 'live',
    name: 'Lets Call Mom',
    tagline: 'Private family video calls built for unreliable connections.',
    description:
      'Built for family calls and messaging with elderly relatives, especially over low-bandwidth and unreliable networks. WebRTC signalled by a Cloudflare Worker, with every byte of media sent over a single TLS relay on port 443 so a call keeps going when the connection is poor. Apps for web, Android, iPhone, Windows and Linux that ring like a phone, with messaging, live translated subtitles and on-device face framing. Invite-only, built for one family.',
    url: 'https://talk.sirous.uk/',
    displayUrl: 'talk.sirous.uk',
    screenshot: lcmShot,
    screenshotAlt:
      'The Lets Call Mom Windows app showing a group chat with messages, a heart reaction, a shared photo and a Sent status.',
    panel: 'lcm',
    audience: 'Invite-only',
    highlightsTitle: 'AI in the call',
    platforms: [
      { name: 'Web', status: 'live', note: 'Installable PWA, deliberately no service worker.' },
      {
        name: 'Android',
        status: 'live',
        note: 'Native app (Capacitor), Google Play internal testing and a signed APK.',
        url: 'https://talk.sirous.uk/download',
      },
      {
        name: 'iPhone',
        status: 'testing',
        note: 'Native app (Capacitor), TestFlight; CallKit ringing on a locked phone.',
      },
      {
        name: 'Windows',
        status: 'live',
        note: 'Desktop app (Electron, signed installer).',
        url: 'https://talk.sirous.uk/download',
      },
      {
        name: 'Linux',
        status: 'live',
        note: 'Desktop app (Electron AppImage).',
        url: 'https://talk.sirous.uk/download',
      },
    ],
    highlights: [
      {
        kicker: 'AI · Subtitles',
        title: 'Live translated subtitles, Farsi ⇄ English',
        body: "The speaker's own device transcribes a cloned copy of its microphone; Cloudflare Workers AI runs Whisper large-v3-turbo for speech-to-text and Gemma for translation. Only viewers whose language differs from the speaker's see a subtitle, phrase by phrase about 2 to 4 seconds behind. Nothing is stored. Every model call goes through one AI gateway with a daily spend cap, so subtitles can never degrade or drop the call.",
      },
      {
        kicker: 'AI · Face framing',
        title: 'Frame everyone: automatic face cropping',
        body: 'When several people sit in front of one camera, on-device face detection (a self-hosted MediaPipe BlazeFace model, never a server) finds up to three faces, crops and follows each one, and sends them so everyone else sees each person in their own tile. Built on the same on-device effect pipeline as background blur and picture backgrounds (MediaPipe selfie segmentation, WebGL).',
      },
    ],
    features: [
      {
        title: 'Mesh and SFU, automatically',
        body: "Mesh for two people, Cloudflare's Realtime SFU for three or more, switched automatically call-wide; DTLS-SRTP end-to-end encryption, the relay never decrypts.",
      },
      {
        title: 'Directed calling',
        body: 'Rings every device of a person: high-priority push on Android, CallKit on iPhone, tray apps on Windows and Linux; an outgoing ringing screen.',
      },
      {
        title: 'Messaging',
        body: '1:1 and room chats with photos, files and app installers, pasted images, replies and emoji reactions, voice and video messages, 7-day history on every device, Sent / Delivered / Seen status.',
      },
      {
        title: 'Screen sharing',
        body: 'From the desktop apps and browsers (with system sound on Windows).',
      },
      {
        title: 'People and rooms',
        body: 'Profile photos, per-person nicknames, guest invite links, Google and Apple sign-in, admin-managed rooms.',
      },
      {
        title: 'Farsi interface',
        body: "Full right-to-left layout, chosen from the visitor's country.",
      },
      {
        title: 'Admin Center',
        body: 'Call history, live per-peer diagnostics, device health probes, a manual mesh/SFU override; every device streams telemetry during a call.',
      },
    ],
    stack: [
      'React 19',
      'TypeScript',
      'Vite',
      'Cloudflare Workers',
      'Durable Objects',
      'D1',
      'R2',
      'Cloudflare Realtime (TURN over TLS/443 and the SFU)',
      'Workers AI (Whisper, Gemma) behind an AI gateway',
      'MediaPipe (BlazeFace, selfie segmentation)',
      'Capacitor (Android, iOS)',
      'Electron (Windows, Linux)',
      'Playwright end-to-end tests',
      'GitHub Actions builds for every platform, iOS signed on hosted macOS runners',
    ],
    links: [
      { label: 'Open the app', url: 'https://talk.sirous.uk/', primary: true },
      { label: 'Downloads', url: 'https://talk.sirous.uk/download' },
    ],
  },
  {
    slug: 'dino-reader',
    index: '03',
    status: 'testing',
    name: 'Dino Reader',
    tagline: 'A storybook reader for kids where every character has their own voice.',
    description:
      'For ages 3 to 8. Scan a page, open a PDF or type a story, and Dino works out who is speaking and reads each character in their own voice, with a highlight that follows every sentence across the real page. No accounts, no ads, no tracking; stories and photos never leave the device.',
    url: 'https://dinoreader.sirous.uk/',
    displayUrl: 'dinoreader.sirous.uk',
    screenshot: dinoShot,
    screenshotAlt:
      'Dino Reader in picture mode: an illustrated page of a bunny and a squirrel in a stadium with the spoken sentence highlighted and previous, play and next buttons.',
    panel: 'dino',
    audience: 'For ages 3 to 8',
    platforms: [
      {
        name: 'Android',
        status: 'testing',
        note: 'Google Play internal testing, plus a direct download.',
        url: 'https://dinoreader.sirous.uk/download/android/latest',
      },
      { name: 'iPhone and iPad', status: 'testing', note: 'TestFlight build.' },
      {
        name: 'Windows',
        status: 'testing',
        note: 'Packaged app built in CI (Store submission pending).',
      },
    ],
    features: [
      {
        title: 'A voice for every character',
        body: 'A dialogue parser attributes each line to a speaker and a voice caster keeps that voice for the whole book; a grown-up picks the narrator; unknown speakers get the narrator.',
      },
      {
        title: 'Picture mode and text mode',
        body: 'The spoken sentence is highlighted on the real scanned page or PDF, or in a clean text view; pages turn with a swipe or the next button.',
      },
      {
        title: 'Story gallery and grown-up area',
        body: 'A hold, then a sum to solve, opens the grown-up area to add stories by typing, pasting, opening a file, scanning pages or importing a PDF, and to edit or delete them.',
      },
      {
        title: 'Cast screen',
        body: "Choose each character's voice, preview it, and merge two names that are the same character.",
      },
      {
        title: 'Nine languages',
        body: 'Right-to-left layout for Farsi and Arabic; the same on-device neural voices and OCR as Read The Stupid Text.',
      },
      {
        title: 'Offline and private',
        body: 'Works offline after the voice pack download; nothing is collected.',
      },
    ],
    stack: [
      '.NET MAUI',
      'C#',
      'DinoReader.Core dialogue library (segmenter, speaker attributor, voice caster, pagination)',
      'Shared platform code with Read The Stupid Text (sherpa-onnx voices, ML Kit / PaddleOCR, PDF extraction)',
      'One release pipeline for both products',
    ],
    links: [
      { label: 'dinoreader.sirous.uk', url: 'https://dinoreader.sirous.uk/', primary: true },
      { label: 'Android download', url: 'https://dinoreader.sirous.uk/download/android/latest' },
      { label: 'GitHub', url: RTST_REPO },
    ],
  },
];

export const reservedSlot: ReservedSlot = {
  index: '04',
  status: 'reserved',
  name: 'This space grows',
  description: 'Each release lands here.',
  slotLabel: 'RESERVED',
};

export const liveProducts = products.filter((p) => p.status === 'live');
export const testingProducts = products.filter((p) => p.status === 'testing');

const NUMBER_WORDS = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

/** Spells out 1-9 ("three"); larger numbers stay as digits. */
export function numberWord(n: number): string {
  return NUMBER_WORDS[n - 1] ?? String(n);
}
