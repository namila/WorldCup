use worldcup;

FROM(
SELECT logDate as day, COUNT(DISTINCT userId) AS UserCount
FROM logData
WHERE requestType = "GET" AND isHTML = true AND statusCode = 200
GROUP BY logDate
) Source

SELECT Source.UserCount, COUNT(Source.UserCount) GROUP BY Source.UserCount ORDER BY Source.UserCount;


