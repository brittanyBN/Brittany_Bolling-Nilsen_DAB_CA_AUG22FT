module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        fullName: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        role: DataTypes.ENUM('admin', 'member')
    });

    User.associate = function(models) {
        User.hasMany(models.Adoption);
    };

    return User;
};
