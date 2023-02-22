class TemperamentService {
    constructor(db) {
        this.client = db.sequelize;
        this.Temperament = db.Temperament;
        console.log(db);
    }

    async create(id, name) {
        return this.Temperament.create(
            {
                Id: id,
                Name: name,
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
}


module.exports = TemperamentService;