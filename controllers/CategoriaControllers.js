const CategoriaModel = require("../models/CategoriaModel")

class CategoriaController {
    static async indexGet(req, res) {
        let data = await CategoriaModel.consultar();
        res.send(data);
    }
}

module.exports = CategoriaController;