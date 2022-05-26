//const pool = require('../database/config');
const  UserRepositoryInterface = require('../repositories/user.repository.interface');

class UserRepositoryMysql extends UserRepositoryInterface {
    constructor({ databaseHandler }) {
        super()
        this.databaseHandler = databaseHandler
        this.getUserByEmail = this.getUserByEmail.bind(this)
    }
    async getUserByEmail(arrayParameters) {
        const sql = `select id_user, password, verification_code, bad_request_number from m_User where email = ?`
        return this.databaseHandler.getPool().query(sql, arrayParameters)
    }
}

module.exports = UserRepositoryMysql;