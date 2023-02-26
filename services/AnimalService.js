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
                    attributes: ["name"],
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
            const years = Math.floor(ageDate.getUTCFullYear() - 1970);
            const months = Math.floor(ageDate.getUTCMonth());
            animal.currentAge = `${years} years, ${months} months`;
        });

        return animals;
    }

    async updateAnimal(animalId, adoptionStatus) {
        const animal = await this.getAnimalById(animalId);

        if (animal > 0) {
            alert("Cannot adopt this animal, it is already adopted");
            return
        }
        let adoption = adoptionStatus
        console.log("animalId: " + animalId);
        animal.adopted = true;
        await animal.save()
            .then((response) => {
                console.log("Animal updated");
                console.log("response: " + response);
            })
            .catch((response) => {
                alert(response.statusText);
            });
    }

    async returnAnimal(animalId, adoptionStatus) {
        const returnAnimal = await this.getAnimalById(animalId);

        if (returnAnimal > 0) {
            alert("Cannot cancel this adoption, it is already cancelled");
            return
        }
        let adoption = adoptionStatus
        console.log("animalId: " + animalId);
        returnAnimal.adopted = false;
        await returnAnimal.save()
            .then((response) => {
                console.log("Animal updated");
                console.log("response: " + response);
            })
            .catch((response) => {
                alert(response.statusText);
            });
    }

    async getAnimalById(animalId) {
        return this.Animal.findOne({
            where: {id: animalId},
        });
    }

}

module.exports = AnimalService;
