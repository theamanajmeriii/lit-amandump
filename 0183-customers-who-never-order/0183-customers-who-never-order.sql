# Write your MySQL query statement below
SELECT customers.name as Customers
FROM customers
LEFT JOIN orders
ON customers.id = orders.customerId
WHERE orders.id IS NULL;