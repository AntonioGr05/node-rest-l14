const db = require('../dbconnection');

class CategoriaModel {
    static async consultar() {
        let query = db('categoria')
        return await query;
    }
}

module.exports = CategoriaModel;