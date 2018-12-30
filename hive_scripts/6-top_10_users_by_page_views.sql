USE worldcup;

SELECT userId, COUNT(*) AS pageViews 
FROM logData
WHERE requestType = "GET" AND isHTML = true
GROUP BY userId
ORDER BY pageViews DESC
LIMIT 10;