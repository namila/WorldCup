USE worldcup;

FROM(
SELECT Count(*) AS PageVisits, logDate
FROM logData
WHERE requestType = "GET" AND isHTML = true
GROUP BY logDate
)Source

SELECT AVG(Source.PageVisits);