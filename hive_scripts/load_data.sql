-- Creating the database
CREATE DATABASE IF NOT EXISTS worldcup;

USE worldcup;

-- Creating the table
CREATE TABLE IF NOT EXISTS LogDataRaw(
  userId INT,
  gap1 STRING,
  gap2 STRING,
  logTime1 STRING,
  logTime2 STRING,
  request1 STRING,
  request2 STRING,
  request3 STRING,
  statusCode INT,
  dataSize DOUBLE
)
ROW FORMAT DELIMITED
FIELDS TERMINATED BY ' '
STORED AS TEXTFILE;

-- Loading data into the raw table from files
LOAD DATA LOCAL INPATH '/resource/Data/SampleSet' OVERWRITE INTO TABLE LogDataRaw;

-- Making it possbile to have all partitions as dynamic
SET hive.exec.dynamic.partition.mode=nonstrict;

-- Creating the cleaned data table
CREATE TABLE IF NOT EXISTS LogData(
  userId INT,
  logTimeStamp STRING,
  hourOfDay INT,
  request STRING,
  statusCode INT,
  dataSize DOUBLE,
  isHTML BOOLEAN
)
PARTITIONED BY (logDate STRING, requestType STRING)
STORED AS TEXTFILE;

-- Loading Data into the cleaned table
FROM LogDataRaw source 
INSERT OVERWRITE TABLE LogData PARTITION(logDate, requestType)
SELECT source.userId,
 REGEXP_REPLACE(CONCAT(source.logTime1,source.logTime2), "(\\[|\\])", ""),
 Hour(from_unixtime(unix_timestamp(REGEXP_REPLACE(CONCAT(source.logTime1,source.logTime2), "(\\[|\\])", ""), "dd/MMM/yyyy:HH:mm:ss"))),
 source.request2, source.statusCode, source.dataSize, source.request2 RLIKE ".+\.(htm|html)$",
 REGEXP_EXTRACT(source.logTime1, "\\d+/\\w+/\\d+", 0),REGEXP_REPLACE(source.request1,"\"", ""); 
