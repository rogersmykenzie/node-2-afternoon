const express = require('express');
const { json } = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const controller = require('./products_controller')

const app = express();
app.use(json());

massive(process.env.CONNECTION_STRING)
.then(db => {
    app.set('db', db);
}).catch((err) => console.log(err))

app.get('/api/products', controller.getAll);
app.get('/api/products/:id', controller.getOne);
app.put('/api/products/:id', controller.update);
app.post('/api/products', controller.create);
app.delete('/api/products/:id', controller.delete);

app.listen(3000, () => console.log('Listening on port 3000'));