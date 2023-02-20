module.exports = (sequelize, DataTypes) => {
    const Adoption = sequelize.define('Adoption', {
        adoptedAt: DataTypes.DATE
    });

    Adoption.associate = function(models) {
        Adoption.belongsTo(models.Animal);
        Adoption.belongsTo(models.User);
    };

    return Adoption;
};
