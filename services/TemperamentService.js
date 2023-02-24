class TemperamentService {
    constructor(db) {
        this.client = db.sequelize;
        this.Temperament = db.Temperament;
        console.log(db);
    }

    async create(name) {
        return this.Temperament.create(
            {
                name: name,
            }
        )
    }

    async get() {
        return this.temperament = this.Temperament.findAll({
            where: {}
        })
    }

    async deleteTemperament(TemperamentId) {
        return this.Temperament.destroy({
            where: {id: TemperamentId}
        })
    }

    async getTemperamentById(tempId) {
        return this.Temperament.findOne({
            where: {id: tempId},
        });
    }

}


module.exports = TemperamentService;