const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://DevTestServer:<lo4wywPl1vYAwpLm>@cluster0-shard-00-00-yaai8.mongodb.net:27017,cluster0-shard-00-01-yaai8.mongodb.net:27017,cluster0-shard-00-02-yaai8.mongodb.net:27017/week10?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());

// Métodos HTTP : get, post, put, delete

//Tipos de parâmetros:

//Query Params: req.query (Filtros, ordenação, paginação)
//Route Params: req.params (Identificar um recurso na alteração ou remoção)
//Body:         req.body (dados para a criação ou alteração de um registro)

// MongoDB (Banco de dados não-relacional)

app.get('/users', (req, res) => {
    return res.json({ message: 'Hello Omnistack' });
});

app.listen(3333);