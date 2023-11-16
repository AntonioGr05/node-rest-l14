const MenuModel = require("../models/MenusModel")

class MenusController
{
    static async indexGet(req, res){
        let data = await MenuModel.consultar();
        res.send(data);
    }

    static async getById(req, res) {
        let id = req.params.id;
        let data = await MenuModel.consultarPorId(id)
    }
}

module.exports = MenusController;