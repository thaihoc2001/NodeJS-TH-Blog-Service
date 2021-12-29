const express = require('express');
const router = express.Router();
const confideController = require('../controller/mesenger.controller');
const validator = require('../validator/checkToken')

router.post('/send', confideController.sendMesenger)
router.get('/',validator.checkToken, confideController.getMessenger)

module.exports = router
