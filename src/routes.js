const { Router } = require('express');
const routes = Router();
const axios = require('axios');
const Dev = require('./models/Dev')

routes.post('/devs', async (req, res) => {

    const{ github_username, techs } = req.body

    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)
    
    const { name = login, avatar_url, bio } = apiResponse.data;

    const TechsArray = techs.split(',').map (techs => techs.trim());

    const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: TechsArray,
    })
    console.log(name, avatar_url, bio, github_username)

    return res.json(dev);
});

module.exports = routes;