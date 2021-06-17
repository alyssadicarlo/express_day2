'use strict';

const http = require('http');

const hostname = "127.0.0.1";
const port = 3000;

const express = require('express');
const app = express();

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', './views');
app.set('view engine', 'html');

const server = http.createServer(app);

server.listen(port, server, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});

const routeController = require('./routes/index');
const catsController = require('./routes/cats');
const dogsController = require('./routes/dogs');
const dogsAndCatsController = require('./routes/cats_and_dogs');

app.use('/', routeController);
app.use('/cats', catsController);
app.use('/dawgs', dogsController);
app.use('/cats_and_dogs', dogsAndCatsController);