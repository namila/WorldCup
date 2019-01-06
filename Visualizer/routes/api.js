var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/page_visits', function(req, res, next) {

  var totalPageVisitsData = fs.readFileSync('processedFiles/1-totalPageVisits','utf8');
  var uniquePageVisitsData = fs.readFileSync('processedFiles/2-uniquePageVisits','utf-8');
  var averageVisitsPerDayData = fs.readFileSync('processedFiles/3-averageVisitsPerDay','utf-8');

  res.send(
    {
      totalPageVisits: totalPageVisitsData.replace('Total View Count','').trim(),
      uniquePageVisits: uniquePageVisitsData.replace('Unique Page Visit Count','').trim(),
      averageVisitsPerDay: averageVisitsPerDayData
    }
  );
});

router.get('/total_visits_by_hour', function(req, res, next){
  var totalVisitsPerHourData = fs.readFileSync('processedFiles/4-histogram_total_visits_by_hour','utf8')
  var lines = totalVisitsPerHourData.split('\n');
  console.log(lines[0]);
  res.send({line: lines[0]});
});

module.exports = router;