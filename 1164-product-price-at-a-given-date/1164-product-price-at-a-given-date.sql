# Write your MySQL query statement below
SELECT product_id, new_price AS price
from Products
where (product_id,change_date) IN (
    select product_id, max(change_date) from products
    where change_date <= '2019-08-16'
    group by product_id 
     

)

union

SELECT product_id, 10 AS Price
from Products
group by product_id
having MIN(change_date) > '2019-08-16'
