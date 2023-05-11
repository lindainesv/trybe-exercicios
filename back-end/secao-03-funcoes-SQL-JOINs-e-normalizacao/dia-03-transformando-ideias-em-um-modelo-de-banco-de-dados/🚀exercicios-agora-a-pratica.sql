DROP SCHEMA IF EXISTS zoologico;
CREATE SCHEMA zoologico;
USE zoologico;

CREATE TABLE gerente(
gerente_id INT Primary Key AUTO_INCREMENT, 
nome VARCHAR(10) NOT NULL
);

CREATE TABLE cuidador(
cuidador_id INT Primary Key AUTO_INCREMENT, 
nome VARCHAR(10) NOT NULL,
gerente_id INTEGER,
FOREIGN KEY (gerente_id) REFERENCES gerente (gerente_id)
);

CREATE TABLE animal_cuidador(
    animal_id INT,
    cuidador_id INT,
    CONSTRAINT PRIMARY KEY(animal_id, cuidador_id),
    FOREIGN KEY (animal_id) REFERENCES animal (animal_id),
    FOREIGN KEY (cuidador_id) REFERENCES cuidador (cuidador_id)
);

