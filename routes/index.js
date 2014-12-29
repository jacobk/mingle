var express = require('express');
var router = express.Router();
var argv = require('minimist')(process.argv.slice(2));


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express', publicUrl: argv.url });
});

module.exports = router;
