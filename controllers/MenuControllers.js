const MenuModel = require("../models/MenusModel")

class MenusController
{
    static async indexGet(req, res){
        let data = await MenuModel.consultar();
        res.send(data);
    }
}

module.exports = MenusController;