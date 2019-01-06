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
  var dataSet = [];
  var lines = totalVisitsPerHourData.split('\n');
  var dataPoint = null;
  
  for(var i = 0; i < lines.length; ++i){
    if(lines[i] == ""){
      continue;
    }
    dataPoint = lines[i].split("\t");
    dataSet.push({
      hour: dataPoint[0].trim(),
      count: dataPoint[1].trim()

    });
  }
  
  res.send({data:dataSet});
});


router.get('/unique_visits_by_hour', function(req, res, next){
  var uniqueVisitsPerHourData = fs.readFileSync('processedFiles/4-histogram_total_unique_visits_by_hour','utf8')
  var dataSet = [];
  var lines = uniqueVisitsPerHourData.split('\n');
  var dataPoint = null;
  
  for(var i = 0; i < lines.length; ++i){
    if(lines[i] == ""){
      continue;
    }
    dataPoint = lines[i].split("\t");
    dataSet.push({
      hour: dataPoint[0].trim(),
      count: dataPoint[1].trim()

    });
  }
  
  res.send({data:dataSet});
});

module.exports = router;