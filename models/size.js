module.exports = (sequelize, DataTypes) => {
    const Size = sequelize.define('Size', {
        size: DataTypes.ENUM('small', 'medium', 'large')
    }, {
        timestamps: false
    });
    Size.associate = function(models) {
        Size.hasMany(models.Animal);
    };

    return Size;
};