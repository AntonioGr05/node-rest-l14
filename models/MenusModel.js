const db = require('../dbconnection');

class MenuModel {
    static async consultar()
    {
        let  query = db('menus');
        return await query;
    }

    static async consultarPorId(id) {
        let query = db('menus').where('id_menu', id);
        return await query;
    }
}

module.exports = MenuModel;


