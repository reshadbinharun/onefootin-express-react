import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './client/App';
import MyForm from './client/Form';

const port = 3000;
const server = express();

server.get('/', (req, res) => {
    res.send(renderToString(<App/>))
});

server.get('/form', (req, res) => {
    res.send(renderToString(<MyForm/>))
});

server.listen(port);
console.log(`Serving at http://localhost:${port}`);