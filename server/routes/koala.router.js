const express = require('express');
const koalaRouter = express.Router();
const pg = require('pg');

const pool = new pg.Pool({
    database: 'koala_holla', 
    host: 'localhost',
    port: 5432,
  });

// DB CONNECTION
let koalas = [];

// GET
koalaRouter.get('/', (req, res) => {
    console.log('Get request for Koalas');
    res.send(koalas);
    //res.sendStatus(200);
});

// POST
koalaRouter.post('/addKoala', (req, res) => {
    console.log('POST request made for /koalas');
    console.log(req.body)
    res.sendStatus(201);
});

// PUT
koalaRouter.put('/koalas/:koalaId', (req, res) => {
    replaceKoalaByID(req.params.koalaId, req.body);
    res.sendStatus(203);
});

// DELETE
koalaRouter.delete('/koalas/:koalaId', (req, res) => {
    removeKoalaById(req.params.koalaId);
    res.sendStatus(204);
});



koalaRouter.get('/sql', (req, res) => {
    let queryText = 'SELECT * FROM koalas;';
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((err) => {
            console.log(`Error making query ${queryText}`, err);
            res.sendStatus(500);
        });
});

module.exports = koalaRouter;