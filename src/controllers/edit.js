const user = require('../model/user');

module.exports = {
  async editUser(req, res) {
    const dados = req.body;
    const u = await user.findOne({
      where: { EDV: dados.edv }
    });

    if (u) {
      await user.update(
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

        },
        {
          where: { EDV: dados.edv }
        }
      );

      res.redirect('/register');
    } else {
      res.status(404).send('Usuário não encontrado');
    }
  },

  async editUserGet(req, res) {
    const EDV = req.body.edv;
    console.log(req.body);
    const u = await user.findOne({
      raw: true,
      attributes: ['EDV', 'Nome', 'Rua', 'Número', 'Bairro', 'Telefone', 'Email', 'Horario', 'Latitude', 'Longitude'],
      where: { EDV }
    });

    res.render('../views/register-view', { user: u, message: false});
  }
};
