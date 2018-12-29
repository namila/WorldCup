USE worldcup;

FROM(
SELECT COUNT(*) AS PageVisits, logDate
FROM logData
WHERE requestType = "GET" AND isHTML = true
GROUP BY logDate
)Source

SELECT AVG(Source.PageVisits);