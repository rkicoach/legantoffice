const path = require('path');
const express = require('express');
const next = require('next');
const cache = require('./cache');

//const dev = process.env.NODE_ENV !== 'production';
const dev = 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
/*if (process.env.NODE_ENV === 'production') {
  server.use(express.static('client/build')); 
  server.use('*', express.static('client/build')); // Added this     
}*/
const server = express();
const port = 8080;

module.exports = app.prepare()
  .then(() => server
    .get('/sw.js', (req, res) => res.sendFile(path.resolve('./.next/sw.js')))
    .use(cache(app))
    .use((req, res) => handle(req, res)))
  .then(() => server.listen(port, () => console.log(`> Ready on http://localhost:${port}`)))
  .catch((err) => {
    console.error(err);
  });
