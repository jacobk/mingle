var express = require('express');
var router = express.Router();
var argv = require('minimist')(process.argv.slice(2));


/* GET users listing. */
router.get('/', function(req, res) {
  res.render('theatre', { title: 'Theatre', publicUrl: argv.url });
});

module.exports = router;
