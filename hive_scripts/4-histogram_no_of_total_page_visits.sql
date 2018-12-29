USE worldcup;

SELECT COUNT (*) AS PageVisits, hourOfDay
FROM logData
GROUP BY hourOfDay
ORDER BY hourOfDay; 

