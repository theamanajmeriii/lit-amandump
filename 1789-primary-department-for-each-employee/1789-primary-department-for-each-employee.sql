# Write your MySQL query statement below

select employee_id,department_id from employee
where primary_flag='Y'

union


SELECT employee_id, department_id
FROM employee
WHERE employee_id IN (
    SELECT employee_id
    FROM employee
    GROUP BY employee_id
    HAVING COUNT(*) = 1
);