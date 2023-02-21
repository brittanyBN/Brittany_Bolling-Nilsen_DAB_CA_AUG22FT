module.exports = (sequelize, DataTypes) => {
    const Adoption = sequelize.define('Adoption', {
        adopted: DataTypes.BOOLEAN
    }, {
        timestamps: false
    });
    Adoption.associate = function(models) {
        Adoption.belongsTo(models.Animal);
        Adoption.belongsTo(models.User);
    };
    return Adoption;
};
