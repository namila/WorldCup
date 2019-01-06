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

router.get('/visitor_count', function(req, res, next){
  var visitorCountData = fs.readFileSync('processedFiles/5-histogram_no_of_visitors_per_day','utf8')
  var dataSet = [];
  var lines = visitorCountData.split('\n');
  var dataPoint = null;
  
  for(var i = 0; i < lines.length; ++i){
    if(lines[i] == ""){
      continue;
    }
    dataPoint = lines[i].split("\t");
    dataSet.push({
      visitorCount: dataPoint[0].trim(),
      dayCount: dataPoint[1].trim()

    });
  }
  
  res.send({data:dataSet});
});

router.get('/top-ten', function(req, res, next){
  var topUserData = fs.readFileSync('processedFiles/6-top_10_users_by_page_views','utf8');
  var topPageData = fs.readFileSync('processedFiles/7-top_10_pages_by_views','utf8');
  
  var userData = [];
  var userLines = topUserData.split('\n');
  var dataPoint = null;

  for(var i = 0; i < userLines.length; ++i){
    if(userLines[i] == ""){
      continue;
    }
    dataPoint = userLines[i].split("\t");
    userData.push({
      userId: dataPoint[0].trim(),
      viewCount: dataPoint[1].trim()

    });
  }

  var pageData = [];
  var pageLines = topPageData.split('\n');

  for(var i = 0; i < pageLines.length; ++i){
    if(pageLines[i] == ""){
      continue;
    }

    dataPoint = pageLines[i].split("\t");
    pageData.push({
      pageUrl: dataPoint[0].trim(),
      viewCount: dataPoint[1].trim()

    });
  }
  
  res.send(
    {
     userData:userData,
     pageData: pageData
    }
  );
});

module.exports = router;