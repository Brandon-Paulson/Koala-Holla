const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION

// GET
koalaRouter.get('/', (req, res) => {
    console.log('Get request for Koalas');
    res.sendStatus(200);
});

// POST
koalaRouter.post('/', (req, res) => {
    console.log('POST request made for /koalas');
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


module.exports = koalaRouter;