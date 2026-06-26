/**
 * Site-level configuration for the sirous.uk portal.
 * Edit here to toggle the upcoming placeholder slots or update brand links.
 */
export const siteConfig = {
  /** Show the two dashed "upcoming" placeholder cards under the flagship. */
  showUpcoming: true,
  /** External brand links shared across header, maker card and footer. */
  links: {
    personalSite: 'https://ashkan.sirous.uk',
  },
  /** Footer copyright year. */
  copyrightYear: 2026,
} as const;
