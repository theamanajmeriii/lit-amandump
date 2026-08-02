# Write your MySQL query statement below
SELECT product_name,year,price from sales
join product 
on sales.product_id = Product.product_id