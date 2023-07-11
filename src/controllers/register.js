const database = require('../config/db');
const user = require('../model/user');

module.exports = 
{
    async pagRegisterGet(req, res)
    {
        res.render('../views/register-view',{user:''});
    },

    /* async fillHiddenInput (req, res) {
        
        

    }, */

    async userInsert(req, res)
    {
        const dados = req.body;
        await user.create
        (
            {
                EDV: dados.edv,
                Nome: dados.nome,
                Rua: dados.rua,
                Número: dados.numero,
                Bairro: dados.bairro,
                Telefone: dados.telefone,
                Email: dados.email,
                Horario: dados.horario,
                Latitude: dados.lat,
                Longitude: dados.lon
            }
        );

        res.redirect('/')
    }
}

