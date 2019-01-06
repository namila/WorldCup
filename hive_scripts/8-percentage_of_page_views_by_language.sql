USE worldcup;

SELECT SUM(IF(isFrench == true,1,0))/COUNT(*) * 100 AS FrenchPercentage, 
 SUM(IF(isEnglish == true,1,0))/COUNT(*) * 100 AS EnglishPercentage, SUM(IF(isSpanish == true,1,0))/COUNT(*) * 100 AS SpanishPercentage
FROM logData
WHERE requestType = "GET" AND isHTML = true AND statusCode = 200;