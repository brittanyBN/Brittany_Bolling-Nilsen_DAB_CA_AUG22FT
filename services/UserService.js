const { sequelize } = require("../models");
class UserService {
    constructor(db) {
        this.client = db.sequelize;
        this.User = db.User;
        this.Adoption = db.Adoption;
        this.Role = db.Role;
    }

    async create(fullName, username, salt, encryptedPassword) {
        return this.User.create(
            {
                fullName: fullName,
                Username: username,
                Salt: salt,
                EncryptedPassword: encryptedPassword
            }
        )
    }

    async getAll() {
        return this.User.findAll({
            where: {}
        })
    }

    async getOne(userId) {
        return await this.User.findOne({
            where: {id: userId},
            include: {
                model: this.Role
            }
        });
    }
    async getOneByName(username) {
        return await this.User.findOne({
            where: {username: username},
            include: {
                model: this.Role
            }
        });
    }

    async deleteUser(userId) {
        return this.User.destroy({
            where: {id: userId}
        })
    }
}
module.exports = UserService;