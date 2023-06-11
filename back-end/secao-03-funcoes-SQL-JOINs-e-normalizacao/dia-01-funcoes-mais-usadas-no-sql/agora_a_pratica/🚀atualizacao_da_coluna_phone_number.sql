-- 11. 🚀 Escreva uma query que atualize a coluna phone_number, de modo que todos os telefones iniciados 
-- por 515 agora devem iniciar com 777.
-- USE employees;
UPDATE employees
SET phone_number = replace(phone_number, '515', '777')
WHERE '515%';