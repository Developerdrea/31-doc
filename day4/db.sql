CREATE DATABASE day4_db;
USE day4_db;

CREATE TABLE users(
    id INT AUTO-INCREMENT PRIMARY KEY;
    name VARCHAR(100);
    email VARCHAR(100) UNIQUE;
    age INT
);

INSERT INTO users (name, email, age)
VALUES
('Rea', 'rea@example.com', 19),
('Andrea', 'andrea@example.com', 22);



SELECT * FROM users;

UPDATE users SET age = 21 WHERE name = 'Rea';
DELETE FROM users WHERE name = 'Andrea';