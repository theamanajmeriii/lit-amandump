# Write your MySQL query statement below
-- //this is going to be bullshit

select ROUND(COUNT(DISTINCT a.player_id)/
(select COUNT(DISTINCT player_id) from Activity),2) as fraction
from Activity a

join (

select player_id, Min(event_date) as first_day

from Activity
group by player_id

) f
on a.player_id = f.player_id
and a.event_date = date_add(f.first_day, INTERVAL 1 DAY )





