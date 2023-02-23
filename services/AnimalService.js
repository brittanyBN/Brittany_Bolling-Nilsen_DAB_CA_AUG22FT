class AnimalService {
    constructor(db) {
        this.client = db.sequelize;
        this.Animal = db.Animal;
    }

    async create(id, name, speciesId, birthday, temperamentId, sizeId, adopted) {
            return await this.Animal.create({
                Id: id,
                Name: name,
                SpeciesId: speciesId,
                Birthday: birthday,
                TemperamentId: temperamentId,
                SizeId: sizeId,
                Adopted: adopted
            });
        }

    async get() {
            const animals = await this.Animal.findAll({
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
                ],
            });

        const now = new Date();
        animals.forEach(animal => {
            const birthday = new Date(animal.birthday);
            const age = now.getTime() - birthday.getTime();
            const ageDate = new Date(age);
            const years = Math.abs(ageDate.getUTCFullYear() - 1970);
            const months = Math.abs(ageDate.getUTCMonth());
            animal.currentAge = `${years} years, ${months} months`;
        });

        return animals;
    }

    async deleteAnimal(animalId) {
        return this.Animal.destroy({
            where: {id: animalId}
        })
    }
}

module.exports = AnimalService;