const express = require('express');
const homeController = require('../../controllers/web/home')
const route = express.Router()

route.get('/',homeController.getHome);

module.exports = route;