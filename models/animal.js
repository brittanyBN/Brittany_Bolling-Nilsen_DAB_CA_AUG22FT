module.exports = (sequelize, DataTypes) => {
    const Animal = sequelize.define('Animal', {
        name: DataTypes.STRING,
        birthday: DataTypes.DATEONLY
    }, {
        timestamps: false
    });

    Animal.associate = function(models) {
        Animal.belongsToMany(models.Temperament, { through: 'AnimalTemperament'});
        Animal.belongsTo(models.Species);
        Animal.belongsTo(models.Size);
        Animal.hasOne(models.Adoption);
    };

    return Animal;
};
