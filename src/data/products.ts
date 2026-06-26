/**
 * Product catalogue for the portal grid.
 *
 * Adding a future product is a one-line change: append a `live` entry and, if the
 * grid is full, remove an `upcoming` placeholder. The first live product renders as
 * the large flagship card; placeholders render as dashed "slot" cards.
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
    'Select any text on Windows and it reads it aloud — at whatever speed you like. A tiny desktop tool for getting through text by listening instead of squinting.',
  url: 'https://readthestupidtext.sirous.uk/',
  displayUrl: 'readthestupidtext.sirous.uk',
};

export const upcoming: Product[] = [
  {
    index: '02',
    status: 'upcoming',
    name: 'Next product',
    description: 'In development.',
    slotLabel: 'IN THE WORKS',
  },
  {
    index: '03',
    status: 'reserved',
    name: 'This space grows',
    description: 'Each release lands here.',
    slotLabel: 'RESERVED',
  },
];
