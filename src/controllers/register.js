const user = require('../model/user');

module.exports = {
  async pagRegisterGet(req, res) {
    res.render('../views/register-view', { user: '', message: false });
  },

  async userInsert(req, res) {
    const dados = req.body;

    await user.create({
      EDV: dados.edv,
      Nome: dados.nome,
      Rua: dados.rua,
      Número: dados.numero,
      Bairro: dados.bairro,
      Telefone: dados.telefone,
      Email: dados.email,
      Horario: dados.horario,
    });

    // Exibe o popup de alerta
    // res.send(
    //   `<script>
    //     window.location.href = '/';
    //     const teste = document.getElementsByClassName("teste")
    //     teste.innerHTML = "<p> Usuário cadastrado com sucesso</p>" 
    //     SetTimeOut(() => {window.location.href = '/';},5000)
        
    //   </script>`
    //);

    res.render('../views/index.ejs', { user: '', message:true });
  },
};