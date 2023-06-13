-- drop tables if exists
drop table if exists players CASCADE;
drop table if exists games CASCADE;
drop table if exists stats CASCADE;

CREATE table players
(
	playerId DOUBLE PRECISION NOT NULL,
	name VARCHAR (200) NOT NULL,
	height INT NOT NULL,
	weight INT NOT NULL,
	dob date,
	position VARCHAR,
	origin VARCHAR,
	primary key (playerId)
);

CREATE table games
(
	gameId VARCHAR (200) NOT NULL,
	year INT NOT NULL,
	round VARCHAR (200) NOT NULL,
	date date NOT NULL,
	venue VARCHAR (200) NOT NULL,
	startTime TIME NOT NULL,
	attendance INT,
	homeTeam VARCHAR (200) NOT NULL,
	homeTeamsScore INT, 
	awayTeam VARCHAR (200) NOT NULL,
	awayTeamScore INT,
	rainfall DOUBLE PRECISION,
	primary key (gameId)
);

CREATE table stats
(
	gameId VARCHAR (200) NOT NULL,
	team VARCHAR (200) NOT NULL,
	year INT NOT NULL,
	round VARCHAR (200) NOT NULL,
	playerId DOUBLE PRECISION NOT NULL,
	name VARCHAR (200) NOT NULL,
	gameNumber INT NOT NULL,
	Disposal INT,
	Kicks INT,
	Marks INT,
	Handballs INT,
	Goals INT,
	Behinds INT,
	Hit_Outs INT,
	Tackles INT,
	Rebounds INT,
	Inside_50 INT,
	Clearances INT,
	Clangers INT,
	Frees INT,
	Frees_Against INT,
	Brownlow_Votes INT,
	Contested_Possessions INT,
	Uncontested_Possessions INT,
	Contested_Marks INT,
	Marks_Inside_50 INT,
	One_Percenters INT,
	Bounces INT,
	Goal_Assists INT,
	percent_Played INT,
	Subs VARCHAR
);


--each table is to be run seperately

-- SELECT * FROM players
-- SELECT * FROM games
-- SELECT * FROM stats

