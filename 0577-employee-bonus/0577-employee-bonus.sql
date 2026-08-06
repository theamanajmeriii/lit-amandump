# Write your MySQL query statement below
SELECT NAME, BONUS FROM EMPLOYEE
left JOIN BONUS 
ON EMPLOYEE.empId = Bonus.empId
where Bonus.bonus < 1000 OR Bonus.bonus is null
