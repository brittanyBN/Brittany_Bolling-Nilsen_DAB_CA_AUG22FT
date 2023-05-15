module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'User',
        {
            firstname: DataTypes.STRING,
            lastname: DataTypes.STRING,
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            password: DataTypes.STRING,
            role:  {
                type: DataTypes.ENUM('admin', 'member'),
            }
        },
        {
            timestamps: false,
        }
    );

    return User;
};
