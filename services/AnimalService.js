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
        // validate input data
        if (!name || !species || !temperament || !size) {
            throw new Error("Invalid input data");
        }

        try {
            return await this.Animal.create({
                Id: id,
                Name: name,
                Species: species,
                Birthday: birthday,
                Temperament: temperament,
                Size: size,
                Adopted: adopted,
            });
        } catch (error) {
            console.log(error);
            throw new Error("Failed to create animal");
        }
    }

    async get(page = 1, limit = 10) {
        const offset = (page - 1) * limit;

        try {
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
                        include: [
                            {
                                model: this.client.models.User,
                                attributes: ["fullName"],
                            },
                        ],
                    },
                ],
                offset: offset,
                limit: limit,
            });
        } catch (error) {
            console.log(error);
            throw new Error("Failed to get animals");
        }
    }

    async deleteAnimal(AnimalId) {
        try {
            const animal = await this.Animal.findByPk(AnimalId);
            if (!animal) {
                throw new Error("Animal not found");
            }
            await animal.destroy();
            return true;
        } catch (error) {
            console.log(error);
            throw new Error("Failed to delete animal");
        }
    }
}

module.exports = AnimalService;