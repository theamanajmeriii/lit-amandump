# Write your MySQL query statement below
SELECT CUSTOMER_ID,COUNT(VISITS.VISIT_ID) AS count_no_trans FROM VISITS
LEFT JOIN TRANSACTIONS
ON Visits.visit_id = Transactions.visit_id
WHERE Transactions.transaction_id IS NULL
GROUP BY Visits.customer_id