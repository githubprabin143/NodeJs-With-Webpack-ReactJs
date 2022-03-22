const express = require('express');
const route = express.Router()

route.use(require('./post'))

module.exports = route;