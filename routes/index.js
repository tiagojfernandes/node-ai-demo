var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET health check endpoint. */
router.get('/healthz', function(req, res, next) {
  res.json({ status: 'ok' });
});

module.exports = router;
