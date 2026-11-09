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
import dinoShot from '../assets/products/dino-reader.webp';
import dinoStep1 from '../assets/products/dino-reader-step-1.webp';
import dinoStep2 from '../assets/products/dino-reader-step-2.webp';
import dinoStep3 from '../assets/products/dino-reader-step-3.webp';
import dinoStep4 from '../assets/products/dino-reader-step-4.webp';
import rtstStep1 from '../assets/products/read-the-stupid-text-step-1.webp';
import rtstStep2 from '../assets/products/read-the-stupid-text-step-2.webp';
import rtstStep3 from '../assets/products/read-the-stupid-text-step-3.webp';
import bookShot from '../assets/products/print-the-damn-book.webp';
import bookStep1 from '../assets/products/print-the-damn-book-step-1.webp';
import bookStep2 from '../assets/products/print-the-damn-book-step-2.webp';
import bookStep3 from '../assets/products/print-the-damn-book-step-3.webp';

export type ProductStatus = 'live' | 'testing' | 'reserved';
export type PlatformStatus = 'live' | 'testing';
export type ScreenshotFit = 'bleed' | 'float' | 'art';
export type PanelKey = 'rtst' | 'lcm' | 'dino' | 'book';

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

export interface GalleryStep {
  image: ImageMetadata;
  alt: string;
  title: string;
  body: string;
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
  /** `bleed` (default) runs off the panel's bottom edge; `float` sits inside it; `art` fills the panel edge to edge. */
  screenshotFit?: ScreenshotFit;
  /** Picks the panel colour token. */
  panel: PanelKey;
  platforms: Platform[];
  features: Feature[];
  highlights?: Highlight[];
  /** Heading above `highlights` on the product page; defaults to "Highlights". */
  highlightsTitle?: string;
  /** Optional step-by-step app shots shown on the product page. */
  gallery?: GalleryStep[];
  /** Heading above `gallery` on the product page. */
  galleryTitle?: string;
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
const RTST_PLAY_TESTING = 'https://play.google.com/apps/testing/uk.sirous.readthestupidtext';
const RTST_TESTFLIGHT = 'https://testflight.apple.com/join/NSeUK2h8';
const TESTERS_GROUP = 'https://groups.google.com/g/sirous-app-testers';
const DINO_PLAY_TESTING = 'https://play.google.com/apps/testing/uk.sirous.dinoreader';
const DINO_TESTFLIGHT = 'https://testflight.apple.com/join/WnF7M53D';
const BOOK_REPO = 'https://github.com/ashkansirous/print-the-damn-book';
const BOOK_SITE = 'https://print-the-damn-book.sirous.uk/';
const BOOK_DOWNLOAD = `${BOOK_REPO}/releases/latest/download/PrintTheDamnBook.exe`;

export const products: Product[] = [
  {
    slug: 'read-the-stupid-text',
    index: '01',
    status: 'live',
    name: 'Read The Stupid Text',
    tagline: 'Reads any text aloud in a natural voice, offline, at your speed.',
    description:
      'Select or copy text, press Ctrl+Win+R, or open a file, and it reads it aloud in a natural on-device neural voice at any speed from 0.5x to 2x. A Windows tray app on the Microsoft Store, with Android and iPhone apps (both in beta) that read a page straight from the camera. Nothing you read leaves the device.',
    url: 'https://readthestupidtext.sirous.uk/',
    displayUrl: 'readthestupidtext.sirous.uk',
    screenshot: rtstShot,
    screenshotAlt:
      'The Read The Stupid Text tray control panel while it reads copied text: pause and skip buttons, progress, the speed, the Momonga voice and the read controls.',
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
        note: 'Beta on Google Play: join the testers group, then open the Play link.',
        url: RTST_PLAY_TESTING,
      },
      {
        name: 'iPhone and iPad',
        status: 'testing',
        note: 'Beta on TestFlight, open to anyone.',
        url: RTST_TESTFLIGHT,
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
        title: 'Fourteen languages',
        body: 'Voices and interface in English, Farsi, French, Spanish, Portuguese, Chinese, Arabic, Russian, Japanese, Danish, Finnish, Swedish, Norwegian and Dutch, with right-to-left layout for Farsi and Arabic, on Windows, Android and iOS.',
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
        body: 'No account; text, files and scans never leave the device. Only small anonymous counts are sent (no names, nothing you read), and you can switch them off.',
      },
    ],
    galleryTitle: 'On your phone',
    gallery: [
      {
        image: rtstStep1,
        title: 'Paste, listen, carry on.',
        body: 'The sentence being read is highlighted, with skip back and forward and a progress bar.',
      },
      {
        image: rtstStep2,
        title: 'From a photo or a file.',
        body: 'Point the camera at a page or open a .txt, .pdf or .docx file.',
      },
      {
        image: rtstStep3,
        title: 'Your speed, your voice.',
        body: 'Pick a speed from 0.5x to 2x, the voice and the language.',
      },
    ].map((step) => ({ ...step, alt: `${step.title} ${step.body}` })),
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
      { label: 'Android beta: 1. join the testers group', url: TESTERS_GROUP },
      { label: 'Android beta: 2. Google Play', url: RTST_PLAY_TESTING },
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
    status: 'live',
    name: 'Dino Book Reader',
    tagline:
      'Picture books read aloud with a voice for every character, or your own.',
    description:
      'For ages 3 to 9. Pick illustrated stories from the free story store and each character is read in their own voice, with the sentence lighting up as it is read. A grown-up can record their own voice for any character in a story, so the child hears family as the wolf or the gingerbread man. Recordings are kept on the device, and in a backup only if a grown-up makes one. Works offline once books are downloaded. No ads, no accounts.',
    url: 'https://dinoreader.sirous.uk/',
    displayUrl: 'dinoreader.sirous.uk',
    screenshot: dinoShot,
    screenshotAlt:
      "Dino Book Reader on a phone: the kids' shelf with the illustrated covers of the books they have downloaded.",
    panel: 'dino',
    audience: 'For ages 3 to 9',
    platforms: [
      {
        name: 'Android',
        status: 'testing',
        note: 'Beta on Google Play: join the testers group, then open the Play link.',
        url: DINO_PLAY_TESTING,
      },
      { name: 'iPhone and iPad', status: 'testing', note: 'Beta on TestFlight, open to anyone.', url: DINO_TESTFLIGHT },
      {
        name: 'Windows',
        status: 'live',
        note: 'Live on the Microsoft Store.',
        url: 'https://apps.microsoft.com/detail/9N9VHRLCZXN5',
      },
    ],
    features: [
      {
        title: 'Your family, in the story',
        body: 'A grown-up can record their own voice for any character, in each of the family’s story languages. Recordings are kept on the device, and in a backup only if a grown-up makes one.',
      },
      {
        title: 'A voice for every character',
        body: 'Every character speaks with its own pre-made voice.',
      },
      {
        title: 'Picture, text or both',
        body: 'Read with the picture only, the text only, or the picture and text together. The sentence lights up as it is read.',
      },
      {
        title: 'Free story store',
        body: 'Books come from the free story store. Behind the grown-ups’ gate sit Books, Store and Settings, plus backup and restore.',
      },
      {
        title: 'Fifteen languages',
        body: 'English, Arabic, Danish, German, Spanish, Persian (Farsi), Finnish, French, Japanese, Norwegian, Dutch, Portuguese, Russian, Swedish and Chinese.',
      },
      {
        title: 'Offline, no ads, no accounts',
        body: 'Works offline once books are downloaded. No ads and no accounts.',
      },
    ],
    galleryTitle: 'A look inside',
    gallery: [
      {
        image: dinoStep1,
        title: 'Reading, picture and text.',
        body: 'The sentence being read lights up on a text card over the bottom of the picture.',
      },
      {
        image: dinoStep2,
        title: 'The free story store.',
        body: 'Browse books by age and add them to your shelf.',
      },
      {
        image: dinoStep3,
        title: 'Record a character.',
        body: 'A grown-up records the family voice for a character, per language.',
      },
      {
        image: dinoStep4,
        title: 'Picture-only pages.',
        body: 'Let the picture tell the story while the voices read.',
      },
    ].map((step) => ({ ...step, alt: `${step.title} ${step.body}` })),
    stack: [
      '.NET MAUI app on Android, iOS and Windows',
      'Pre-made voice clips for every character',
      'Stories served from our own Cloudflare Worker',
      'Optional anonymous usage counts, which a grown-up can switch off in Settings',
    ],
    links: [
      { label: 'dinoreader.sirous.uk', url: 'https://dinoreader.sirous.uk/', primary: true },
      { label: 'Windows: Microsoft Store', url: 'https://apps.microsoft.com/detail/9N9VHRLCZXN5' },
      { label: 'Android beta: 1. join the testers group', url: TESTERS_GROUP },
      { label: 'Android beta: 2. Google Play', url: DINO_PLAY_TESTING },
      { label: 'iPhone and iPad beta on TestFlight', url: DINO_TESTFLIGHT },
      { label: 'GitHub', url: RTST_REPO },
    ],
  },
  {
    slug: 'print-the-damn-book',
    index: '04',
    status: 'testing',
    name: 'Print the Damn Book',
    tagline: 'Picture books, in the right order.',
    description:
      'Drop a folder of page images. Print the Damn Book works out what goes where on every sheet, then prints the booklet double-sided. Free. Windows 10 and 11, 64-bit. A single .exe, nothing to install.',
    url: BOOK_SITE,
    displayUrl: 'print-the-damn-book.sirous.uk',
    screenshot: bookShot,
    screenshotAlt:
      'Three picture-book pages fanned out: a cover reading Good Enough, a stadium scene and a closing page.',
    screenshotFit: 'art',
    panel: 'book',
    audience: 'Free Windows app',
    platforms: [
      {
        name: 'Windows',
        status: 'testing',
        note: 'Free, single .exe for Windows 10 and 11, 64-bit; first release coming.',
        url: BOOK_SITE,
      },
    ],
    features: [
      {
        title: 'Open a folder of pages',
        body: 'JPG or PNG pages named Cover, 1 … N, Back cover, in natural sort order. Drag to reorder, add and remove pages; blanks are inserted before the back cover automatically.',
      },
      {
        title: 'The app works out the page order',
        body: 'Saddle-stitch imposition, two pages per landscape sheet, decides which page goes on which face. The maths is unit-tested in a separate Core library.',
      },
      {
        title: 'Sheet preview',
        body: 'See every front and back before printing, with a warning above 6 sheets (a single folded stack).',
      },
      {
        title: 'Duplex in one job',
        body: 'Orientation, duplex mode and paper size are set by the app (A4 default, Letter selectable). A "Print test sheet" button confirms the flip edge; manual two-sided mode covers printers without duplex.',
      },
      {
        title: 'Remembers your options',
        body: 'Fit or fill, flip edge, margin, paper, printer and two-sided are kept between runs, with an optional separate job for the cover sheet.',
      },
      {
        title: 'Offline and private',
        body: 'No network access, no accounts; settings stay in a local folder.',
      },
    ],
    galleryTitle: 'Open, Check, Print',
    gallery: [
      {
        image: bookStep1,
        title: 'Drop a folder. Get a book.',
        body: 'Name your pages Cover, 1, 2 … Back cover and it works out what goes where on every sheet.',
      },
      {
        image: bookStep2,
        title: 'See every sheet before you print.',
        body: 'Front and back, exactly as they come out; fold the stack and it reads in order.',
      },
      {
        image: bookStep3,
        title: 'One job. Both sides. Done.',
        body: 'Print a test sheet once to check the flip edge, then send the whole book.',
      },
    ].map((step) => ({ ...step, alt: `${step.title} ${step.body}` })),
    stack: [
      'C#',
      '.NET 10 (LTS)',
      'WPF',
      'MVVM (CommunityToolkit.Mvvm)',
      'System.Printing',
      'xUnit tests on the Core library',
      'GitHub Actions release build (single self-contained win-x64 exe)',
    ],
    links: [
      { label: 'Visit site', url: BOOK_SITE, primary: true },
      { label: 'Download for Windows', url: BOOK_DOWNLOAD },
      { label: 'Source on GitHub', url: BOOK_REPO },
    ],
  },
];

export const reservedSlot: ReservedSlot = {
  index: '05',
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
