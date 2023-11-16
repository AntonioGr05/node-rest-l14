const db = require('../dbconnection');

class CategoriaModel {
    static async consultar() {
        let query = db('categoria')
        return await query;
    }

    static async consultarPorId(id) {
        let query = db('categoria').where('id_categoria', id);
        return await query;
    }
}

module.exports = CategoriaModel;