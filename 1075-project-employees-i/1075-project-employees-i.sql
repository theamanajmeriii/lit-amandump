# Write your MySQL query statement below
SELECT project_id , Round(Avg(experience_years),2) as average_years from Project
left join Employee
on  Employee.employee_id=project.employee_id 
group by project_id
