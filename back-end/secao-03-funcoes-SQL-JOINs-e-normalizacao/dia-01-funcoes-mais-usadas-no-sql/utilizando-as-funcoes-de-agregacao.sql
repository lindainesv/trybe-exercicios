-- Monte um query que exiba...
SELECT 
-- A média de duração dos filmes e dê o nome da coluna de ‘Média de Duração’:
	AVG(length) AS 'Média de Duração',
-- A duração mínima dos filmes como 'Duração Mínima':
	MIN(length) AS 'Duração Mínima',
-- A duração máxima dos filmes como ‘Duração Máxima’:
    MAX(length) AS 'Duração Máxima',
-- A soma de todas as durações como ‘Tempo de Exibição Total’:
    SUM(length) AS 'Tempo de Exibição Total',
-- E, finalmente, a quantidade total de filmes cadastrados na tabela sakila.film como ‘Filmes Registrados’:
    COUNT(*) AS 'Filmes Registrados'
FROM sakila.film;