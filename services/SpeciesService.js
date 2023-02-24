class SpeciesService {
    constructor(db) {
        this.client = db.sequelize;
        this.Species = db.Species;
        console.log(db);
    }

    async create(name) {
        return await this.Species.create(
            {
                name: name,
            }
        );
    }

    async get() {
        return this.species = this.Species.findAll({
            where: {}
        })
    }

    async deleteSpecies(SpeciesId) {
        return this.Species.destroy({
            where: {id: SpeciesId}
        })
    }
}
module.exports = SpeciesService;