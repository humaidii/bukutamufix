const { Model, DataTypes } = require("sequelize");

module.exports = function(connection) {
    class Tamu extends Model{}

    Tamu.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nama: {
            type: DataTypes.STRING,
        },
        tanggal: {
            type: DataTypes.DATE,
        },
        jam: {
            type: DataTypes.TIME,
        },
        instansi: {
            type: DataTypes.STRING,
        },
        keperluan: {
            type: DataTypes.TEXT,
        },
        id_satker: {
            type: DataTypes.INTEGER,
            references: {
                model: {
                    tableName: 'satker'
                },
                key: 'id'
            }
        },
        no_hp: {
            type: DataTypes.STRING,
        }
    }, {
        sequelize: connection,
        tableName: 'tamu',
        timestamps: false,
    });
    return Tamu;
}