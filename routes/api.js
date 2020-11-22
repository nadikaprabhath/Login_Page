var express = require('express');
var router = express.Router();
var api = require('./../models/api');

router.post('/user', api.submit);

module.exports = router;