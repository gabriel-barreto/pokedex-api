const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

const app = express();
app.use(bodyParser.json());
app.use(logger('tiny'));

// --> Import configs
const config = require('./config');

// --> Import router
const router = require('./routes');

// --> Injecting routes
app.use(router);

// --> Start server
app.listen(config.port, () => {
    console.log('API is Online!');
    console.log(` ==> Mode: ${config.mode}`);
    console.log(` ==> Port: ${config.port}`);
});