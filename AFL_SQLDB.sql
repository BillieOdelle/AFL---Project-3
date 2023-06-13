-- drop tables if exists
drop table if exists players CASCADE;
drop table if exists games CASCADE;
drop table if exists stats CASCADE;

-- CREATE table players
-- (
-- 	playerId INT NOT NULL,
-- 	displayName VARCHAR (200) NOT NULL,
-- 	height INT NOT NULL,
-- 	weight INT NOT NULL,
-- 	dob date NOT NULL
-- --	position VARCHAR NOT NULL,
-- --	origin VARCHAR (200) NOT NULL,
-- 	primary key (playerId)
-- );

CREATE table games
(
	gameId VARCHAR (200) NOT NULL,
	year INT NOT NULL,
	round VARCHAR (200) NOT NULL,
	date date NOT NULL,
	venue VARCHAR (200) NOT NULL,
	startTime TIME NOT NULL,
	attendance INT NOT NULL,
	homeTeam VARCHAR (200) NOT NULL,
	homeTeamsScore INT NOT NULL, 
	awayTeam VARCHAR (200) NOT NULL,
	awayTeamScore INT NOT NULL,
	rainfall DOUBLE PRECISION NOT NULL,
	primary key (gameId)
);

CREATE table stats
(
gameId VARCHAR (200) NOT NULL,
team VARCHAR (200) NOT NULL,
year INT NOT NULL,
round VARCHAR (200) NOT NULL,
playerId INT NOT NULL,
gameNumber INT NOT NULL,
Disposal INT NOT NULL,
Kicks INT NOT NULL,
Marks INT NOT NULL,
Handballs INT NOT NULL,
Goals INT NOT NULL,
Behinds INT NOT NULL,
-- Hit Outs INT NOT NULL,
Tackles INT NOT NULL,
Rebounds INT NOT NULL,
--Inside 50 INT NOT NULL,
Clearances INT NOT NULL,
Clangers INT NOT NULL,
Frees INT NOT NULL,
--Frees Against INT NOT NULL,
--Brownlow Votes INT NOT NULL,
--Contested Possessions INT NOT NULL,
--Uncontested Possessions INT NOT NULL,
--Contested Marks INT NOT NULL,
--Marks Inside 50 INT NOT NULL,
--One Percenters INT NOT NULL,
Bounces INT NOT NULL,
--Goal Assists INT NOT NULL,
--% Played INT NOT NULL,
Subs  INT NOT NULL,
primary key (year)
);


--each table is to be run seperately

-- SELECT * FROM players
-- SELECT * FROM games
-- SELECT * FROM stats

