var express = require('express');
var router = express.Router();

let index = require("../controllers/landing");
/* GET home page. */
router.get('/', index.getLanding);

module.exports = router;
