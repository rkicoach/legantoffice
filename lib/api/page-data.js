const fetch = require('isomorphic-fetch');

export default async (page, id) => {
  const res = await fetch(`https://cs.theelegantoffice.com/api/v1/${page}/${id}/`);
  const json = await res.json();

  if (!json || json.length === 0) {
    throw new Error(`Failed to fetch ${page} data`);
  }

  return json;
};
