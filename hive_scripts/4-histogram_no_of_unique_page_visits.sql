USE worldcup;

SELECT hourOfDay, COUNT(DISTINCT userId, request) AS UniquePageVisits
FROM logData
WHERE requestType = "GET" AND isHTML = true AND statusCode = 200
GROUP BY hourOfDay
ORDER BY hourOfDay;