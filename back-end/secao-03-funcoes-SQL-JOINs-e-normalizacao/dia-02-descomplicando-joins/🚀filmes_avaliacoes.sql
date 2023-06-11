-- 🚀 Exercício 3: Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação (rating) em ordem 
-- decrescente.
USE pixar;
SELECT m.title, b.rating
FROM movies m
INNER JOIN
box_office b ON b.movie_id = m.id
ORDER BY b.rating DESC;

