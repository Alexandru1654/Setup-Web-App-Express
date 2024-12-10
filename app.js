const express = require('express');
const mysql = require('mysql2');
const app = express();

db.connect(err => {
    if (err) {
        console.error('Errore di connessione: ' + err.stack);
        return;
    }
    console.log('Connesso al database con ID ' + db.threadId);
});

app.use(express.json());

app.get('/movies', (req, res) => {
    db.query('SELECT * FROM movies', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

app.get('/movies/:id', (req, res) => {
    const movieId = req.params.id;

    db.query('SELECT * FROM movies WHERE id = ?', [movieId], (err, movie) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (movie.length === 0) {
            return res.status(404).json({ message: 'Film non trovato' });
        }

        db.query('SELECT * FROM reviews WHERE movie_id = ?', [movieId], (err, reviews) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json({ movie: movie[0], reviews });
        });
    });
});

app.listen(3000, () => {
    console.log('Server avviato sulla porta 3000');
});


