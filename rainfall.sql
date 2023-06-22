select * from stats
select gameid, sum(disposal) from stats group by gameid

select width_bucket(g.rainfall,0,20,30) rainfall, sum(s.disposal), sum(s.contested_marks), sum(s.goals)
from games g
inner join stats s on g.gameid = s.gameid
group by g.rainfall

select avg(s.disposal), avg(s.contested_marks), avg(s.goals)
from games g
inner join stats s on g.gameid = s.gameid
where g.rainfall < 10

