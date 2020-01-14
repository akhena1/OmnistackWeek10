const { Router } = require('express');
const routes = Router();

routes.get('/devs', (req, res) => {
    return res.json({ message: 'Hello Omnistack' });
});

module.exports = routes;