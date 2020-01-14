const express = require('express');

const app = express();

app.use(express.json());

// Métodos HTTP : get, post, put, delete

//Tipos de parâmetros:

//Query Params: req.query (Filtros, ordenação, paginação)
//Route Params: req.params (Identificar um recurso na alteração ou remoção)
//Body:         req.body (dados para a criação ou alteração de um registro)

app.get('/users', (req, res) => {
    return res.json({ message: 'Hello Omnistack' });
});

app.listen(3333);