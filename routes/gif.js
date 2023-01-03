const express = require('express');
const GifController = require('../controllers/gif.controller');

const router = express.Router();

router.get('/gifs', GifController.get);

module.exports = router;