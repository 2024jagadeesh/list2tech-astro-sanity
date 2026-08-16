export const homepageQuery = `
  *[_type == "page"][0]{
    title,
    slug,
    sections[]
  }
`;

export const siteSettingsQuery = `
  *[_type == "siteSettings"][0]{
    siteName,
    logo,
    headerMenu,
    headerButton,
    footerDescription,
    footerColumns,
    copyright
  }
`;
