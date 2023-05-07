-- 🚀 Exercício 6: Utilizando o INNER JOIN, selecione todas as informações dos filmes que estão em cartaz 
-- (possuem theater_id diferente de NULL) com avaliação maior que 8.
USE pixar;
SELECT m.title, m.director, m.year, m.length_minutes, m.theater_id, b.rating
FROM movies m 
INNER JOIN box_office b ON b.movie_id = m.id
where theater_id is NOT NULL AND rating > 8;
