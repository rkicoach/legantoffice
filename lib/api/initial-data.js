const fetch = require('isomorphic-fetch');

export default async () => {
  /*const menuRes = await fetch('https://next-api.teo.systems/menu');
  const menu = await menuRes.json();

  const promoBarRes = await fetch('https://next-api.teo.systems/promo-bar');
  const promoBar = await promoBarRes.json();

  const pagesRes = await fetch('https://next-api.teo.systems/pages');
  const pages = await pagesRes.json();

  const socialLinksRes = await fetch('https://next-api.teo.systems/social-links');
  const socialLinks = await socialLinksRes.json();*/

  const menuRes = await fetch('https://cs.theelegantoffice.com/api/v1/menunames');
  const menu = await menuRes.json();

  const promoBarRes = await fetch('https://cs.theelegantoffice.com/api/v1/promos');
  const promoBar = await promoBarRes.json();

  const pagesRes = await fetch('https://cs.theelegantoffice.com/api/v1/pagenames');
  const pages = await pagesRes.json();

  const socialLinksRes = await fetch('https://cs.theelegantoffice.com/api/v1/socials');
  const socialLinks = await socialLinksRes.json();

  //const coutryCodeRes = await fetch('http://ip-api.com/json');
  //const coutryCodeRes = await fetch('https://freegeoip.net/json/');
	const coutryCodeRes = await fetch('https://api.ipstack.com/check?access_key=2141b062793e5b4e7f6e55775547b1f5');
  const coutryCode = await coutryCodeRes.json();

  const initialData = {
    menu,
    promoBar,
    pages,
    socialLinks,
    coutryCode
  };

  return initialData;
};
