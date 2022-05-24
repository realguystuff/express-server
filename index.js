const express = require('express');
const axios = require('axios');
const app = express();
const port = 80;
var favicon = require('serve-favicon');

app.use(favicon(__dirname + '/favicon.ico'));
app.get('/', (req, res) => res.send(`welcome to windows 11's project website!<br/><br/>the table of contents page will be updated when a new project is added.<br/><a href="https://w11projects.tk/toc">Table of contents</a>`));
app.get('/toc', (req, res) => res.send(`table of contents:<br/><br/><a href="https://w11projects.tk/credits">credits</a><br/><a href="https://w11projects.tk/error">error</a><br/><a href="https://w11projects.tk/toc">toc</a><br/><a href="https://w11projects.tk/pran">pran</a><br/><br/>projects:<br/><h3>none yet</h3>`));
app.get('/pran', (req, res) => res.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ'));
app.get('/credits', (req, res) => res.send(`<h1>Credits</h1>well i did this all by myself, but thanks to the <a href="https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw">Coding Train</a>, he inspired me to make an express app to make a website. His project, "Peek in Pi" will be made here since his video inspired me to make this website.`));
app.get('/projects', (req, res) => res.send(`<h1>404 Not Found</h1>`));
app.get('/error', (req, res) => res.send(`<h1>Error codes</h1>since im lazy, to access them all, do w11projects.tk/error/(errorcode)<br/><br/>207<br/>208<br/>226<br/>400<br/>401<br/>402<br/>403<br/>404<br/>405<br/>406<br/>407<br/>408<br/>409<br/>410<br/>411<br/>412<br/>413<br/>414<br/>415<br/>416<br/>417<br/>418<br/>421<br/>422`));
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
