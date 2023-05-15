class UserService {
    constructor(db) {
        this.client = db.sequelize;
        this.User = db.User;
        this.Adoption = db.Adoption;
    }

    async create(firstname, lastname, username, password, role) {
        return this.User.create(
            {
                firstname: firstname,
                lastname: lastname,
                username: username,
                password: password,
                role: role
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
            where: {id: userId}
        });
    }

    async getOneByName(username) {
        return await this.User.findOne({
            where: {username: username}
        });
    }

    async getUserById(userId) {
        return await this.User.findByPk(userId)
    }

    async deleteUser(userId) {
        return this.User.destroy({
            where: {id: userId}
        })
    }
}
module.exports = UserService;