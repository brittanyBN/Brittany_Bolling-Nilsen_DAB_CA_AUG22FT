class AnimalService {
    constructor(db) {
        this.client = db.sequelize;
        this.Animal = db.Animal;
    }

    async create(id, name, speciesId, birthday, temperamentId, sizeId, adoptedId ) {
            return await this.Animal.create({
                Id: id,
                Name: name,
                SpeciesId: speciesId,
                Birthday: birthday,
                TemperamentId: temperamentId,
                SizeId: sizeId,
                AdoptedId: adoptedId,
            });
        }

    async get() {
            return await this.Animal.findAll({
                include: [
                    {
                        model: this.client.models.Species,
                    },
                    {
                        model: this.client.models.Temperament,
                        attributes: ["name"],
                        through: {attributes: []},
                    },
                    {
                        model: this.client.models.Size,
                    },
                    {
                        model: this.client.models.Adoption,
                    },
                ],
            });
    }

    async deleteAnimal(animalId) {
        return this.Animal.destroy({
            where: {id: animalId}
        })
    }
}

module.exports = AnimalService;