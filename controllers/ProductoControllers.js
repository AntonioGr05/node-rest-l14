const ProductoModel = require('../models/ProductoModel')

class ProductoModelController {
    static async indexGet(req, res) {
        let data = await ProductoModel.consultar();
        res.send(data);
    }
}

module.exports = ProductoModelController;