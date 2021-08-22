const express = require('express');
const router = express.Router();
const confideController = require('../controller/confide.controller');

router.post('/send', confideController.postConfide)
router.get('/public', confideController.getConfidePublic)
router.get('/private', confideController.getConfidePrivate)

module.exports = router