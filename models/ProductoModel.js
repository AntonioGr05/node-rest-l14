
const db = require('../dbconnection');

class ProductoModel { 
    static async consultar() {
        let query = db('productos')
        return await query;
    }
}

module.exports = ProductoModel;
