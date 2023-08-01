const { Model, DataTypes } = require("sequelize");

module.exports = function(connection) {
    class Admin extends Model{}

    Admin.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        username: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING
        }
    }, {
        sequelize: connection,
        tableName: 'admin',
        timestamps: false,
    });
    return Admin;
}