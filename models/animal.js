module.exports = (sequelize, DataTypes) => {
    const Animal = sequelize.define('Animal', {
        name: DataTypes.STRING,
        birthday: DataTypes.DATEONLY,
        size: DataTypes.ENUM('small', 'medium', 'large'),
        adopted: DataTypes.BOOLEAN
    });

    Animal.associate = function(models) {
        Animal.belongsToMany(models.Temperament, { through: 'AnimalTemperament'});
        Animal.belongsTo(models.Species);
        Animal.hasOne(models.Adoption);
    };

    return Animal;
};
