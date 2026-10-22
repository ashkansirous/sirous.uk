/**
 * Site-level configuration for the sirous.uk portal.
 * Edit here to toggle the reserved slot or update brand links.
 */
export const siteConfig = {
  /** Show the dashed reserved slot after the last product. */
  showUpcoming: true,
  /** External brand links shared across header, maker card and footer. */
  links: {
    personalSite: 'https://ashkan.sirous.uk',
  },
  /** Footer copyright year. */
  copyrightYear: 2026,
} as const;
