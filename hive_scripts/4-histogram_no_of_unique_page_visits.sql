USE worldcup;

SELECT hourOfDay, COUNT(DISTINCT userId, request) AS UniquePageVisits
FROM logData
WHERE requestType = "GET" AND isHTML = true
GROUP BY hourOfDay
ORDER BY hourOfDay;