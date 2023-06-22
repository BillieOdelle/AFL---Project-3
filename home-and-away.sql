SELECT *
FROM games
WHERE hometeamsscore > awayteamscore;
SELECT *
FROM games
WHERE hometeamsscore < awayteamscore;
SELECT gameid, (hometeamsscore > awayteamscore) as homewin
FROM games;