var express = require('express');
var router = express.Router();

let index = require("../controllers/landing");
/* GET home page. */
router.get('/', index.getLanding);
router.post('/', index.submitLead)

module.exports = router;
