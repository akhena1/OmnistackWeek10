const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http')
const routes = require('./routes');
const {setupWebSocket} = require('./websocket')

const app = express();
const server = http.Server(app);

setupWebSocket(server)

mongoose.connect('mongodb+srv://DevTestServer:1234@cluster0-yaai8.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);


// Métodos HTTP : get, post, put, delete

//Tipos de parâmetros:

//Query Params: req.query (Filtros, ordenação, paginação)
//Route Params: req.params (Identificar um recurso na alteração ou remoção)
//Body:         req.body (dados para a criação ou alteração de um registro)

// MongoDB (Banco de dados não-relacional)


server.listen(3333);