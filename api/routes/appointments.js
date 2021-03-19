var express = require('express');
// const app = express();
var router = express.Router();

router.get("/", function(req, res) {
    res.send("Got a GET request at /appointments")
});

router.post("/", function(req, res) {
    res.send("Got a POST request at /appointments")
});

router.put("/", function(req, res) {
    res.send("Got a PUT request at /appointments")
});

router.delete("/", function(req, res) {
    res.send("Got a DELETE request at /appointments")
});

module.exports = router;