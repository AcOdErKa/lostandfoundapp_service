var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({"message": "Welcome to Lost and Found App"})
});

module.exports = router;
