const user = require('../model/user');

module.exports = 
{
    async deleteUser(req, res)
    {
        const EDV = req.body.edv
        await user.destroy({where:{EDV}})
        res.render('../views/register-view', { user: '', message: true})
    }

}