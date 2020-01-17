const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray')


//Funções padrão de uma controller
//index, show, store, update, destroy*/



module.exports = {
    async index(req, res) {
        const devs = await Dev.find();

        return res.json(devs);
    },

    async store(req, res) {

        const { github_username, techs, latitude, longitude } = req.body

        let dev = await Dev.findOne({ github_username });
        if (!dev) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)

            const { name = login, avatar_url, bio } = apiResponse.data;

            const TechsArray = parseStringAsArray(techs);

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: TechsArray,
                location
            })
        }



        return res.json(dev);
    },
    async update(req, res) {


 
        const devUpdate = await Dev.findOneAndUpdate({ 
            github_username: req.params.id 
        }, 
            req.body );

        return res.json(req.body);
        
    },
    async destroy(req, res){

        await Dev.find({ github_username: req.params.id}).remove()

        return res.json({message: "Excluido com sucesso"})
        
    }
}