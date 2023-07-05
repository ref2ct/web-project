const user = require('../model/user');

module.exports = 
{
    async EditUser(req, res)
    {
        const dados = req.body;
        const u = await user.findOne
        (
             
            {
                raw: true,
                atributes: ['EDV','Nome','Rua','Número','Bairro','Telefone','Email','Horario'],
                where:{EDV: dados.edv}
            }

        )
        u.set({EDV: dados.edv,
            Nome: dados.nome,
            Rua: dados.rua,
            Número: dados.numero,
            Bairro: dados.bairro,
            Telefone: dados.bairro,
            Email: dados.email,
            Horario: dados.horario})
        await u.save();
        res.redirect('/register')
    },

    async EditUserGet(req, res)
    {
       const EDV = req.body.edv
       console.log(req.body)
        const u =  await user.findOne
        (
             
            {
                raw: true,
                atributes: ['EDV','Nome','Rua','Número','Bairro','Telefone','Email','Horario'],
                where:{EDV}
            }

        )
        res.render('../views/register-view', {user:u})
    }

}
