class AnimalService {
    constructor(db) {
        this.client = db.sequelize;
        this.Animal = db.Animal;
        this.Size = db.Size;
        this.Species = db.Species;
        this.Temperament = db.Temperament;
        this.Adoption = db.Adoption;
    }

    async create(id, name, species, birthday, temperament, size, adopted) {
            return await this.Animal.create({
                Id: id,
                Name: name,
                Species: species,
                Birthday: birthday,
                Temperament: temperament,
                Size: size,
                Adopted: adopted,
            });
        }

    async get() {
            return await this.Animal.findAll({
                include: [
                    {
                        model: this.client.models.Species,
                        attributes: ["name"],
                    },
                    {
                        model: this.client.models.Temperament,
                        attributes: ["name"],
                        through: {attributes: []},
                    },
                    {
                        model: this.client.models.Adoption,
                        attributes: ["adopted"],
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