var express = require('express');
const { addItem, getAllItems, getItemsByUsername, getItemsByID } = require('../controllers/itemController');
var router = express.Router();

router.post('/newItemRequest', addItem)
router.get('/getAllItems', getAllItems)
router.get('/getItemsByUsername', getItemsByUsername)
router.get('/getItemById', getItemsByID)

module.exports = router;