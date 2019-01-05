USE worldcup;

SELECT SUM(unix_timestamp(endTime,"HH:mm") - unix_timestamp(startTime,"HH:mm"))/(60 * 60) AS TotalMatchHours, (COUNT(DISTINCT matchDate) * 24 - SUM(unix_timestamp(endTime,"HH:mm") - unix_timestamp(startTime,"HH:mm"))/(60 * 60)) AS TotalNonMatchHours  
FROM timeTable;
-- LIMIT 100;


-- FROM
-- (
--   SELECT SUM(unix_timestamp(endTime,"HH:mm") - unix_timestamp(startTime,"HH:mm")) AS TotalHours 
--   FROM timeTable
-- ) Source

-- SELECT COUNT(*)/Source.TotalHours
-- FROM logData JOIN timeTable ON logData.logDate = timeTable.matchDate
-- WHERE logData.requestType = "GET" AND logData.status = 200 AND logData.isHTML = true AND unix_timestamp(substr(logData.logTimeStamp, 13),"HH:mm:ss") >= unix_timestamp(timeTable.startTime,"HH:mm") AND unix_timestamp(substr(logData.logTimeStamp, 13),"HH:mm:ss") <= unix_timestamp(timeTable.endTime,"HH:mm");