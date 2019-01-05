USE worldcup;
SELECT SUM(IF(logData.statusCode != 200,1,0))/COUNT(*) * 100 AS ErrorPercentage
FROM logData JOIN timeTable ON (logData.logDate = timeTable.matchDate) 
WHERE logData.requestType = "GET" AND logData.isHTML = true AND unix_timestamp(substr(logData.logTimeStamp, 13),"HH:mm:ss") >= unix_timestamp(timeTable.startTime,"HH:mm") AND unix_timestamp(substr(logData.logTimeStamp, 13),"HH:mm:ss") <= unix_timestamp(timeTable.endTime,"HH:mm");





