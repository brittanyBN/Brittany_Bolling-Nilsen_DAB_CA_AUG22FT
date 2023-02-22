class AdoptedService {
    constructor(db) {
        this.client = db.sequelize;
        this.Adoption = db.Adoption;
        console.log(db);
    }

    async create(id, adopted) {
        return this.Adoption.create(
            {
                Id: id,
                Adopted: adopted,
            }
        )
    }

    async get() {
        return this.adopted = this.Adoption.findAll({
            where: {}
        })
    }

    async deleteAdoption(AdoptionId) {
        return this.Adoption.destroy({
            where: {id: AdoptionId}
        })
    }
}
module.exports = AdoptedService;