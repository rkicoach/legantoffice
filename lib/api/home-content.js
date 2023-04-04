const fetch = require('isomorphic-fetch');

const fetchHomeContent = async () => {
  const res = await fetch('https://mock.teo.systems/home-content');
  const json = await res.json();

  if (!json) {
    throw new Error('Failed to fetch home-content');
  }

  return json;
};

module.exports = fetchHomeContent;
