-- Creating the database
CREATE DATABASE IF NOT EXISTS worldcup;

USE worldcup;

-- Raw table for time table data
CREATE TABLE IF NOT EXISTS timeTableRaw(
  matchDate STRING,
  startTime STRING,
  endTime STRING,
  team1 STRING,
  team2 STRING
)
ROW FORMAT DELIMITED
FIELDS TERMINATED BY ','
STORED AS TEXTFILE;

-- Loading time table data into raw table
LOAD DATA LOCAL INPATH  '/resource/Data/Schedule' OVERWRITE INTO TABLE timeTableRaw;

-- Making it possbile to have all partitions as dynamic
SET hive.exec.dynamic.partition.mode=nonstrict;
SET hive.decode.partition.name=true;

-- Creating the cleaned data table
CREATE TABLE IF NOT EXISTS timeTable(
  startTime STRING,
  endTime STRING,
  team1 STRING,
  team2 STRING
)
PARTITIONED BY (matchDate STRING)
STORED AS TEXTFILE;

-- Loading time table formatted data
FROM timeTableRaw Source

INSERT OVERWRITE TABLE timeTable PARTITION(matchDate)
SELECT Source.startTime, Source.endTime, Source.team1, Source.team2,
  REGEXP_REPLACE(Source.matchDate, "/", "-");







