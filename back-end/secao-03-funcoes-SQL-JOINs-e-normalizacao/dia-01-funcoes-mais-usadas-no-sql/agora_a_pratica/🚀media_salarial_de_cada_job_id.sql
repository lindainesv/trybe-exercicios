-- 3. 🚀 Escreva uma query que exiba a média salarial de cada job_id, ordenando pela média salarial 
-- em ordem decrescente.
SELECT job_id, AVG(salary) AS media
FROM employees
GROUP BY job_id
ORDER BY media;
