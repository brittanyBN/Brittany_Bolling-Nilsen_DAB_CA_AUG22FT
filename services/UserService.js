class UserService {
    constructor(db) {
        this.client = db.sequelize;
        this.User = db.User;
        this.Adoption = db.Adoption;
        this.Role = db.Role;
    }

    async create(firstname, lastname, username, password) {
        return this.User.create(
            {
                firstname: firstname,
                lastname: lastname,
                username: username,
                password: password,
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