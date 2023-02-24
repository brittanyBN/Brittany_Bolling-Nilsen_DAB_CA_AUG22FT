module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define('Role', {
        role: DataTypes.ENUM('admin', 'member')

    }, {
        timestamps: false
    });

    Role.associate = function(models) {
        Role.hasMany(models.User);
    };

    return Role;
};