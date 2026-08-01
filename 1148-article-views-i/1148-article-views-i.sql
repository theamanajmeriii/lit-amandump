# Write your MySQL query statement below
SELECT DISTINCT author_id AS id from views
WHERE author_id=viewer_id
ORDER BY author_id ASC

