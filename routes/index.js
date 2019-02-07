const
  express = require('express');
  router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sample App' });
});

module.exports = router;
