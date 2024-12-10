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

