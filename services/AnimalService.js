class AnimalService {
    constructor(db) {
        this.client = db.sequelize;
        this.Animal = db.Animal;
    }

    async create(id, name, birthday, adopted) {
        return await this.Animal.create({
            id: id,
            name: name,
            birthday: birthday,
            adopted: adopted
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
                {
                    model: this.client.models.User,
                    attributes: ["username"],
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
        });
    }

    async getAnimalById(animalId) {
        return this.Animal.findOne({
            where: {id: animalId}
        });
    }

    async adoptAnimal(animalId) {
        const animal = await this.getAnimalById(animalId);
        if (!animal) {
            throw new Error(`Animal with ID :${animalId} not found`);
        }

        animal.adopted = true;
        await animal.save();

        return animal;
    }
}

module.exports = AnimalService;
