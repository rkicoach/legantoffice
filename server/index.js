// server.js
const next = require('next');
const cache = require('./cache');
//var secure = require('express-force-https');

var httpsRedirect = require('express-https-redirect');

const routes = require('../routes')
const sitemapAndRobots = require('./sitemapAndRobots')
const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app)

// With express
const express = require('express')

var redirects = [
  { from: '/blog/accessories-in-the-white-house', to: '/blogcomponent#accessoriesComponent' },
  { from: '/search.php', to: '/category' },
  { from: '/blog/dining-accessories', to: '/blogcomponent#diningComponent' },
  { from: '/blog/color-and-design-trends', to: '/blogcomponent#designComponent' },
  { from: '/index.php', to: '/' },
]

app.prepare().then(() => {

  var server = express()
  //server.use('/', httpsRedirect(true))
  server.use(cache(app))
 server.get('/*/index.php$', (req, res) => {
    let rqURL = req.url.replace("/index.php", "");
    res.redirect(rqURL)
  })

  
  server.get('/:mod_name', (req, res, next) => {
   
    console.log('Module Name',req.params.mod_name)
   
    if(req.params.mod_name != 'category' && req.params.mod_name != 'robots.txt' && req.params.mod_name != 'sitemap.xml'  && req.params.mod_name != 'blogcomponent' && req.params.mod_name != 'search.php' &&  req.params.mod_name != 'index.php' &&  req.params.mod_name != 'defaultcomponent'){
      let rqURL = `/products/${req.params.mod_name}`
      res.redirect(rqURL)
    }
    next();
  })

  server.get('/:mod_name_1/:mod_name_2', (req, res, next) => {
    
     console.log('Module Name 1',req.params.mod_name_1)
     console.log('Module Name 2',req.params.mod_name_2)
    
     if(req.params.mod_name_1 != 'category' && req.params.mod_name_1 != 'shop' && req.params.mod_name_1 != 'search.php' &&  req.params.mod_name_1 != 'index.php' &&  req.params.mod_name_1 != 'defaultcomponent' &&  req.params.mod_name_1 != 'pages' &&  req.params.mod_name_2 != '' &&  req.params.mod_name_2 != undefined && req.params.mod_name_1 != 'products' && req.params.mod_name_1 != 'blog'){
       let rqURL = `/pages/${req.params.mod_name_2}`
       res.redirect(rqURL)
     }
     next();
   })

  
  redirects.forEach(({ from, to, type = 301, method = 'get' }) => {
    server[method](from, (req, res) => {
      res.redirect(type, to)
    })
  })
  
  sitemapAndRobots({ server });

  server.get('*', (req, res) => {
    return handler(req, res)
  })

  server.listen(8080, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:8080')
  })

 // express().use(handler).listen(8080, () => console.log(`> Ready on http://localhost:8080`))
})
