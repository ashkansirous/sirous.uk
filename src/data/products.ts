/**
 * Product catalogue for the portal grid.
 *
 * Adding a future product is a one-line change: change an `upcoming`/`reserved`
 * placeholder's status to `live` (and add its `url`/`displayUrl`). The flagship
 * export renders as the large hero card; every entry in `upcoming` renders as a
 * grid slot — a solid, clickable card for `live` status, a dashed placeholder for
 * `upcoming`/`reserved`. See `ProductSlotCard.astro`.
 */

export type ProductStatus = 'live' | 'upcoming' | 'reserved';

export interface Product {
  /** Two-digit index shown in the card meta row, e.g. "01". */
  index: string;
  status: ProductStatus;
  name: string;
  /** One-line descriptor. For placeholders this is the sub-line copy. */
  description: string;
  /** Where the card links to (live products only). */
  url?: string;
  /** Bare URL shown as text on the flagship card. */
  displayUrl?: string;
  /** Pill label for placeholder slots, e.g. "IN THE WORKS". */
  slotLabel?: string;
}

export const flagship: Product = {
  index: '01',
  status: 'live',
  name: 'Read the Stupid Text',
  description:
    'Select or copy any text on Windows and it reads it aloud in a natural neural voice, at whatever speed you like — fully offline. Also reads uploaded .txt and .pdf files, with a tray control panel, ten voices, and an activity log for when a read misbehaves.',
  url: 'https://readthestupidtext.sirous.uk/',
  displayUrl: 'readthestupidtext.sirous.uk',
};

export const upcoming: Product[] = [
  {
    index: '02',
    status: 'live',
    name: 'Lets Call Mom',
    description:
      'A private, five-person video calling app built to survive a heavily filtered network — WebRTC signalled over Cloudflare, forced onto port 443 so it reads as ordinary HTTPS. Invite-only, built for one family.',
    url: 'https://talk.sirous.uk/',
    displayUrl: 'talk.sirous.uk',
  },
  {
    index: '03',
    status: 'reserved',
    name: 'This space grows',
    description: 'Each release lands here.',
    slotLabel: 'RESERVED',
  },
];
