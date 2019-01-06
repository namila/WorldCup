var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/1', function(req, res, next) {
  res.send(
    {
      totalPageVisits: 200000000,
      uniquePageVisits: 100000000,
      averageVisitsPerDay: 1000
    }
  );
});

module.exports = router;