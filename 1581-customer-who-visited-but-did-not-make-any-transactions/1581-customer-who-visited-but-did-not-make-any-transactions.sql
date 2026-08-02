# Write your MySQL query statement below
SELECT customer_id,count(visits.visit_id) as count_no_trans  from visits
left join Transactions
on visits.visit_id = transactions.visit_id
where transaction_id is null
group by visits.customer_id
