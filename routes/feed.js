const express = require('express');
const feedController = require('../controllers/feed')
const route = express.Router()

route.get('/posts',feedController.getPosts);

route.post('/posts',feedController.createPost);

module.exports = route;