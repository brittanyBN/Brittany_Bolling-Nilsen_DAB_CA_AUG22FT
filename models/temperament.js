module.exports = (sequelize, DataTypes) => {
    const Temperament = sequelize.define('Temperament', {
        name: DataTypes.STRING
    });

    Temperament.associate = function(models) {
        Temperament.belongsToMany(models.Animal, {through: 'AnimalTemperament'});
    };

    return Temperament;
};
