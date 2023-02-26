class SpeciesService {
    constructor(db) {
        this.client = db.sequelize;
        this.Species = db.Species;
        this.Animal = db.Animal;
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

    async alterSpecies(SpeciesId, newName) {
        console.log("SpeciesId: " + SpeciesId);
        const animalCount = await this.getAnimalCountBySpeciesId(animalSpeciesId);

        if (animalCount > 0) {
            alert("Cannot update species because animals exist with this species ID");
            return
        }
        const species = await this.getSpeciesById(SpeciesId);
        species.name = newName;
        await species.save()
            .then((response) => {
                console.log("Species updated");
                console.log("response: " + response);
            })
            .catch((response) => {
                alert(response.statusText);
            });
    }


    async getAnimalCountBySpeciesId(animalSpeciesId) {
        return await this.Animal.count({
            where: {speciesId: animalSpeciesId}
        });
    }

    async getSpeciesById(speciesId) {
        return this.Species.findOne({
            where: {id: speciesId},
        });
    }

    async deleteSpecies(SpeciesId) {
        return this.Species.destroy({
            where: {id: SpeciesId}
        })
    }
}
module.exports = SpeciesService;