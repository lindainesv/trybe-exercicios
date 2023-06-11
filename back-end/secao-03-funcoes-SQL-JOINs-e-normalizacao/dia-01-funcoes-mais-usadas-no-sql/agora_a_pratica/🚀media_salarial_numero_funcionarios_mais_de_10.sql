-- 10. 🚀 Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos 
-- com mais de dez funcionários. Dica: agrupe pelo department_id.
SELECT department_id, AVG(salary) media_salarial, COUNT(*) AS funcionarios 
FROM employees
GROUP BY department_id 
HAVING funcionarios > 10;