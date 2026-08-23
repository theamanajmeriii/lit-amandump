# Write your MySQL query statement below
SELECT query_name,
       ROUND(AVG(rating / position), 2) AS quality,
       ROUND(
           SUM(CASE WHEN rating < 3 THEN 1 ELSE 0 END)
           / COUNT(*) * 100,
           2
       ) AS poor_query_percentage
FROM Queries
-- not gonna use that where here coz remove important case
-- so what we do instead case inbuild condition where rating is less then 3 and 
GROUP BY query_name;
