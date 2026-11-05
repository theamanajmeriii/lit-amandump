# Write your MySQL query statement below

SELECT X,
       Y,
       Z,
       CASE
       when x+y>z
        AND x+z>y
        AND z+y>x
            then 'Yes'
            else 'No'
        END as triangle   
from Triangle  
            
       
       
        