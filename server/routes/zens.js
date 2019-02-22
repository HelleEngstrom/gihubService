var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  console.log("Mocked - save : " + "\"" + req.body.quote + "\"" + " to database.");

});

module.exports = router;
