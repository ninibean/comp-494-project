var express = require("express");
const app = require("../app");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send("GET handler for /testAPI route");
});

router.post('/', function (req , res) {
    res. send ('POST handler for /testAPI route');
});


// google OAUTH
// passport.js is the reccommended middleware for authen

module.exports = router;