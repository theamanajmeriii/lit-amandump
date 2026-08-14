# Write your MySQL query statement below
-- skip wala
SELECT email
FROM Person
GROUP BY email
HAVING COUNT(email) > 1;