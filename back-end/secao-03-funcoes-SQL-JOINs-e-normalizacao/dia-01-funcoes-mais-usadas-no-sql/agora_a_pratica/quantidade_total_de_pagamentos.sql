-- 4. Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas 
-- funcionárias.
SELECT SUM(salary) AS quantidade_total_para_pagamento FROM employees;