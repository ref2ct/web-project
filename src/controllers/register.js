const database = require('../config/db');
const user = require('../model/user');

module.exports = 
{
    async pagRegisterGet(req, res)
    {
        res.render('../views/register-view');
    },

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
                Telefone: dados.bairro,
                Email: dados.email,
                Horario: dados.horario
            }
        );

        res.redirect('/')
    }
}

