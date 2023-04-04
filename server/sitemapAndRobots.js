
var path = require('path');
const sm = require('sitemap');
var algoliasearch = require('algoliasearch');
const fetch = require('isomorphic-fetch');

const sitemap = sm.createSitemap({
	  hostname: 'https://www.theelegantoffice.com/',
	  cacheTime: 600000
})

function setup({server}) {
		  console.log("IN sitemapAndRobots .............................................");
		  server.get('/robots.txt', (req, res) => {
			  		      console.log("path : Node :: ",path.join(__dirname));
			  		      res.sendFile(path.join(__dirname, '../static', 'robots.txt'));
			  		    });


		   server.get('/sitemap.xml',async function(req, res){

			          var staticPages = ['reviews','about-us','contact-us','blog','terms-conditions','shipping','returns','privacy-policy-legal-info']

			          staticPages.forEach((page) => {
					           sitemap.add({
							      		     url: '/pages/'+ page,
							      		     changefreq: 'daily',
							      		     priority: 1
							    		     })
					         })


			          var client = algoliasearch('CUDCYZHOXL', 'ddced29ac732fb0e4f278bcdf96a8405');
			          var index = client.initIndex('next-teo-products');

			          algoliaBrowseAll(index,async function(err,data) {
					           if(err) {
							              console.log("Error IN algoliaBrowseAll:",err);
							            }
					           console.log("Data From algolia:","done");
					           data.forEach((hit) => {
							              if(hit.url) {
								                   sitemap.add({
										          		     url: hit.url,
										          		     changefreq: 'daily',
										          		     priority: 1
										        		     });
								                 }});

					           var menus = await getCategoryList();
					             menus.forEach((menu) => {
							                  if(menu['slug'] && menu['children'].length > 0) {
										                 var slug = menu['slug'];
										                 var children = menu['children'];
										                 children.forEach((child) => {
													                  sitemap.add({
																             		     url: `shop/${slug}/${child.slug}/` ,
																             		     changefreq: 'daily',
																             		     priority: 1
																           		     });
													                })
										               }
							                });

					             sitemap.toXML((err, xml) => {
							       		       if (err) {
										       console.log("Err in sitemap:",err)
										         		         res.status(500).end()
										         		         return
										         		       }
                                                                               console.log("Final in sitemap:","")
							       		       res.header('Content-Type', 'application/xml')
							       		       res.send(xml)
							       		     })


					         })




			   	   })

	     function algoliaBrowseAll(index,callback) {
		            index.search(
				             {
						                query: '',
						                attributesToRetrieve: ['url', 'sku'],
						                hitsPerPage: 1000,
						              },
				             function searchDone(err, content) {
						                if (err) return callback(err);
						                console.log("content.hits.length",  content.hits.length || "No hit length");
						                callback(null,content.hits)
						              }
				           );

		          }

	     async function getCategoryList() {
		             var menuRes = await fetch('https://cs.theelegantoffice.com/api/v1/menunames');
		             const menu = await menuRes.json();
		             console.log("Menu:",menu.length);
		             return menu
		          }
}

module.exports = setup;

