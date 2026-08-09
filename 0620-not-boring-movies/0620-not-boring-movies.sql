# Write your MySQL query statement below
SELECT id,movie,description,rating FROM CINEMA 
WHERE id%2=1 AND DESCRIPTION!='boring'
order by rating desc
