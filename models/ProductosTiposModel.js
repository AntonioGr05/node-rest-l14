
const db = require('../dbconnection');

class ProductosTiposModel {
    static async consultar() {
        let query = db('productos_tipos');
        return await query;
    }
}

module.exports = ProductosTiposModel;