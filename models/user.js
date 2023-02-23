module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: DataTypes.STRING
    }, {
        timestamps: false
    });

    User.associate = function(models) {
        User.hasMany(models.Animal);
        User.belongsTo(models.Role);
    };

    return User;
};