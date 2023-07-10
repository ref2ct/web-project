const database = require('../config/db');
const user = require('../model/user');

module.exports = {
    async pagRegisterGet(req, res) {
        res.render('../views/register-view', { user: '' });
    },

    async userInsert(req, res) {
        const dados = req.body;

        if (!dados.edv || !dados.nome || !dados.rua || !dados.numero || !dados.bairro || !dados.telefone || !dados.email || !dados.horario) {
            return res.send('<script>alert("Usuário não cadastrado. Preencha todos os campos obrigatórios."); window.location.href = "/register";</script>');
        }

        await user.create({
            EDV: dados.edv,
            Nome: dados.nome,
            Rua: dados.rua,
            Número: dados.numero,
            Bairro: dados.bairro,
            Telefone: dados.telefone,
            Email: dados.email,
            Horario: dados.horario
        });

        return res.send('<script>alert("Usuário cadastrado com sucesso."); window.location.href = "/";</script>');
    }
}
