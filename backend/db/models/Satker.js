const { Model, DataTypes } = require("sequelize");

module.exports = function(connection) {
    class Satker extends Model{}

    Satker.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nama_satker: {
            type: DataTypes.STRING,
        },
    }, {
        sequelize: connection,
        tableName: 'satker',
        timestamps: false,
    });
    return Satker;
}