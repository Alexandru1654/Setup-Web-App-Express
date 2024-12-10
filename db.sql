CREATE DATABASE movies_db;

USE movies_db;

CREATE TABLE movies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    director VARCHAR(255) NOT NULL,
    release_year YEAR NOT NULL,
    genre VARCHAR(255) NOT NULL
);

CREATE TABLE reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    movie_id INT,
    user_name VARCHAR(255) NOT NULL,
    rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5),
    review_text TEXT NOT NULL,
    FOREIGN KEY (movie_id) REFERENCES movies (id)
);

