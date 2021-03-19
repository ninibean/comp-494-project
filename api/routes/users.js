var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('GET handler for /users route');
});

router.post('/', function (req, res, next) {
  res.send('POST handler for /users route');
});

module.exports = router;
