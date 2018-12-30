USE worldcup;

SELECT userId, COUNT(*) AS pageViews 
FROM logData
WHERE requestType = "GET" AND isHTML = true AND statusCode = 200
GROUP BY userId
ORDER BY pageViews DESC
LIMIT 10;