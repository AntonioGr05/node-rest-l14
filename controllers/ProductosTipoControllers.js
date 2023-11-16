const ProductosTiposModel = require('../models/ProductosTiposModel')

class ProductoTipoController {
    static async indexGet(req, res)
    {
        let data = await ProductosTiposModel.consultar();
        res.send(data);
    }
}

module.exports = ProductoTipoController;