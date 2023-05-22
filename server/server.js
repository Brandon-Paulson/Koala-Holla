const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;
const koalaRouter = require('./routes/koala.router');

app.use(express.json());
app.use(express.static('server/public'));


let koalas = [];

// ROUTES
app.use('/koalas', koalaRouter);

koalaRouter.get('/', (req, res) => {
  res.send(koalas);
})

koalaRouter.post('/koalas', (req, res) => {
  let koala = req.body;
  console.log(koala);
  koalas.push(req.body);
  res.send('We added this', koala);
});

// Start listening for requests on a specific port
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});

