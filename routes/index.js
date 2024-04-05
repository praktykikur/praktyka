var express = require('express');
var router = express.Router();
var server = require('./../server');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/test', function (req, res, next) {
  console.log('coklwoiek',  req.body);
  server.test(req.body, function(status) {res.send(status)})
});

module.exports = router;