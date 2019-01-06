var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/1', function(req, res, next) {

  var totalPageVisitsData = fs.readFileSync('processedFiles/1-totalPageVisits','utf8');
  var uniquePageVisitsData = fs.readFileSync('processedFiles/2-uniquePageVisits','utf-8');
  var averageVisitsPerDayData = fs.readFileSync('processedFiles/3-averageVisitsPerDay','utf-8');
  
  res.send(
    {
      totalPageVisits: totalPageVisitsData,
      uniquePageVisits: uniquePageVisitsData,
      averageVisitsPerDay: averageVisitsPerDayData
    }
  );
});

module.exports = router;