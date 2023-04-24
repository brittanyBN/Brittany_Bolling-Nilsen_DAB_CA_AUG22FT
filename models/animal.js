module.exports = (sequelize, DataTypes) => {
    const Animal = sequelize.define('Animal', {
        name: DataTypes.STRING,
        birthday: DataTypes.DATEONLY,
        adopted: DataTypes.BOOLEAN
    }, {
        timestamps: false
    });

    Animal.associate = function(models) {
        Animal.belongsToMany(models.Temperament, { through: 'AnimalTemperament', timestamps: false });
        Animal.belongsTo(models.Species);
        Animal.belongsTo(models.Size);
        Animal.belongsTo(models.User);
    };

    return Animal;
};