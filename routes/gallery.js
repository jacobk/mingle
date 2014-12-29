var express = require('express');
var router = express.Router();
var argv = require('minimist')(process.argv.slice(2));
var fs = require('fs');
var _ = require('lodash');

/* GET users listing. */
router.get('/', function(req, res) {

  fs.readdir(argv.pics, function(err, files) {
    files = _.reject(files, function(file) {
      return /^\./.test(file);
    });

    res.render('gallery', { title: 'Gallery', pics: files });

  });

});

module.exports = router;
