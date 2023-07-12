const user = require('../model/user');

module.exports = {
    async pagMapGet(req, res){
        
        const users = await user.findAll({
            raw: true,
            attributes: ['EDV', 'Nome', 'Rua', 'Número', 'Bairro', 'Telefone', 'Email', 'Horario', 'Latitude', 'Longitude']
        });
        res.render('../views/map-view', { users });
    }
}