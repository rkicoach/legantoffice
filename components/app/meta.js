import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const defaultTitle = 'Conference Room Accessories, Leather Desk Accessories';
const metaTitle = title => `The Elegant Office | ${title === null ? defaultTitle : title}`;
//const metaTitle = title => `The Elegant Office | ${defaultTitle}`;

const Meta = ({ pageTitle, metaDescription, canonicalUrl }) => (
  <div>
    <Head>
      <title>{metaTitle(pageTitle)}</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#11416b" />
      <link rel="manifest" href="static/manifest.json" />
      <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
	<script dangerouslySetInnerHTML={{__html: `
		  (function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:"5796529"};o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,"script","//bat.bing.com/bat.js","uetq");
		`}} />
	<script dangerouslySetInnerHTML={{__html: `
		  		  (function e(){var e= document.createElement("script");e.type="text/javascript",e.async=true,e.src="//staticw2.yotpo.com/gzLifCZ7CnkFZTx4G1LaYq2lKf3l5GCCSQy6FivI/widget.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)})();
		  		`}} />
	<noscript><img src="//bat.bing.com/action/0?ti=5796529&Ver=2" height="0" width="0"/></noscript>
      {metaDescription && (
        <meta name="description" content={metaDescription} />
      )}
      {canonicalUrl && (
        <link rel="canonical" href={canonicalUrl} />
      )}
    </Head>
  </div>
);

Meta.propTypes = {
  pageTitle: PropTypes.string,
  metaDescription: PropTypes.string,
  canonicalUrl: PropTypes.string,
};

export default Meta;
