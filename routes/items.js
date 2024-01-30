var express = require('express');
const { addItem } = require('../controllers/itemController');
var router = express.Router();

router.post('/newItemRequest', addItem)

module.exports = router;