USE worldcup;

SELECT request, COUNT(*) AS PageViews
FROM logData
WHERE requestType = "GET" AND isHTML = true AND statusCode = 200
GROUP BY request
ORDER BY PageViews DESC
LIMIT 10;