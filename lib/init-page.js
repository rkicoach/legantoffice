import fetchPageData from './api/page-data';

export default async (page, id) => {
  // build page string, or figure out what page profile to fetch?
  const pageData = await fetchPageData(page, id);

  return pageData;
};
