USE worldcup;

SELECT hourOfDay, COUNT (*) AS PageVisits
FROM logData
WHERE requestType = "GET" AND isHTML = true AND statusCode = 200
GROUP BY hourOfDay
ORDER BY hourOfDay; 

