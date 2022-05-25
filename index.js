const express = require('express');
const axios = require('axios');
const app = express();
const port = 80;
const favicon = require('serve-favicon');

const pip = require('./projects/peekinpi/pip')
app.get(`/projects/pip/:digits`, pip);
const example = 'w11projects.tk/projects/pip/(integer)';
app.get('/projects/pip', (req, res) => res.send(`the interface was actually implemented, but through many beta testing and attempts of bug fixing, it was removed.<br/><br/>To search for a digit(s) in pi, type in the browser: ${example}<br/><br/>Samples:<br/>
<br/><a href="https://w11projects.tk/projects/pip/14159">14159</a>
<br/><a href="https://w11projects.tk/projects/pip/76329">76329</a>
<br/><a href="https://w11projects.tk/projects/pip/207755">207755</a>
<br/><a href="https://w11projects.tk/projects/pip/0314202">0314202</a>
<br/><a href="https://w11projects.tk/projects/pip/999999">999999</a>`));

app.use(favicon(__dirname + '/favicon.ico'));
app.get('/', (req, res) => res.send(`welcome to windows 11's project website!<br/><br/>the table of contents page will be updated when a new project is added.<br/><a href="https://w11projects.tk/toc">Table of contents</a>`));
app.get('/toc', (req, res) => res.send(`table of contents:<br/>
<br/><a href="https://w11projects.tk/credits">credits</a>
<br/><a href="https://w11projects.tk/error">error</a>
<br/><a href="https://w11projects.tk/toc">toc</a>
<br/><a href="https://w11projects.tk/pran">pran</a><br/>
<br/>projects:<br/>
<br/><a href="https://w11projects.tk/projects/pip">peek in pi</a>`));
app.get('/pran', (req, res) => res.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ'));
app.get('/credits', (req, res) => res.send(`<h1>Credits</h1>well i did this all by myself, but thanks to the <a href="https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw">Coding Train</a>, he inspired me to make an express app to make a website. His project, "Peek in Pi" will be made here since his video inspired me to make this website.<br/><br/><a href="https://w11projects.tk/projects/pip">peek in pi</a>`));
app.get('/projects', (req, res) => res.send(`you must refer to the <a href="https://w11projects.tk/toc">table of contents</a>`));
app.get('/error', (req, res) => res.send(`<h1>Error codes</h1>
<br/><a href="https://w11projects.tk/error/207">ERROR 207</a>
<br/><a href="https://w11projects.tk/error/208">ERROR 208</a>
<br/><a href="https://w11projects.tk/error/226">ERROR 226</a><br/>
<br/><a href="https://w11projects.tk/error/400">ERROR 400</a>
<br/><a href="https://w11projects.tk/error/401">ERROR 401</a>
<br/><a href="https://w11projects.tk/error/402">ERROR 402</a>
<br/><a href="https://w11projects.tk/error/403">ERROR 403</a>
<br/><a href="https://w11projects.tk/error/404">ERROR 404</a>
<br/><a href="https://w11projects.tk/error/405">ERROR 405</a>
<br/><a href="https://w11projects.tk/error/406">ERROR 406</a>
<br/><a href="https://w11projects.tk/error/407">ERROR 407</a>
<br/><a href="https://w11projects.tk/error/408">ERROR 408</a>
<br/><a href="https://w11projects.tk/error/409">ERROR 409</a>
<br/><a href="https://w11projects.tk/error/410">ERROR 410</a>
<br/><a href="https://w11projects.tk/error/411">ERROR 411</a>
<br/><a href="https://w11projects.tk/error/412">ERROR 412</a>
<br/><a href="https://w11projects.tk/error/413">ERROR 413</a>
<br/><a href="https://w11projects.tk/error/414">ERROR 414</a>
<br/><a href="https://w11projects.tk/error/415">ERROR 415</a>
<br/><a href="https://w11projects.tk/error/416">ERROR 416</a>
<br/><a href="https://w11projects.tk/error/417">ERROR 417</a>
<br/><a href="https://w11projects.tk/error/418">ERROR 418</a>
<br/><a href="https://w11projects.tk/error/421">ERROR 421</a>
<br/><a href="https://w11projects.tk/error/422">ERROR 422</a>
<br/><br/>
and the rest are just server-side errors...`));
app.get('/error/404', (req, res) => res.send(`<h1>404 Not Found</h1>`));
app.get('/error/403', (req, res) => res.send(`<h1>403 Forbidden</h1>`));
app.get('/error/207', (req, res) => res.send(`<h1>207 Multi-Status</h1>`))
app.get('/error/208', (req, res) => res.send(`<h1>208 Already Reported</h1>`))
app.get('/error/226', (req, res) => res.send(`<h1>226 IM Used</h1>`))
app.get('/error/400', (req, res) => res.send(`<h1>400 Bad Request</h1>`))
app.get('/error/401', (req, res) => res.send(`<h1>401 Unauthorized</h1>`))
app.get('/error/402', (req, res) => res.send(`<h1>402 Payment Required</h1>`))
app.get('/error/405', (req, res) => res.send(`<h1>405 Method Not Allowed</h1>`))
app.get('/error/406', (req, res) => res.send(`<h1>406 Not Acceptable</h1>`))
app.get('/error/407', (req, res) => res.send(`<h1>407 Proxy Authentication Required</h1>`))
app.get('/error/408', (req, res) => res.send(`<h1>408 Request Timeout</h1>`))
app.get('/error/409', (req, res) => res.send(`<h1>409 Conflict</h1>`))
app.get('/error/410', (req, res) => res.send(`<h1>410 Gone</h1>`))
app.get('/error/411', (req, res) => res.send(`<h1>411 Length Required</h1>`))
app.get('/error/412', (req, res) => res.send(`<h1>412 Precondition Failed</h1>`))
app.get('/error/413', (req, res) => res.send(`<h1>413 Payload Too Large</h1>`))
app.get('/error/414', (req, res) => res.send(`<h1>414 URI Too Long</h1>`))
app.get('/error/415', (req, res) => res.send(`<h1>415 Unsupported Media Type</h1>`))
app.get('/error/416', (req, res) => res.send(`<h1>416 Range Not Satisfiable</h1>`))
app.get('/error/417', (req, res) => res.send(`<h1>417 Expectation Failed</h1>`))
app.get('/error/418', (req, res) => res.send(`<h1>418 I'm a teapot</h1>`))
app.get('/error/421', (req, res) => res.send(`<h1>421 Misdirected Request</h1>`))
app.get('/error/422', (req, res) => res.send(`<h1>422 Unprocessable Entity</h1>`))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
