const dotenv = require("dotenv");
dotenv.config();

const AdminFn = require("./Admin");
const SatkerFn = require("./Satker");
const TamuFn = require("./Tamu");
const { Sequelize } = require("sequelize");

const connection = new Sequelize ({
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
});

const Admin = AdminFn(connection);
const Satker = SatkerFn(connection);
const Tamu = TamuFn(connection);

Satker.hasOne(Tamu, {
    sourceKey: 'id',
    foreignKey: 'id_satker',
    as: 'tamu'
});
Tamu.hasMany(Satker, {
    sourceKey: 'id_satker',
    foreignKey: 'id',
    as: 'satker'
})

module.exports = {
    Admin,
    Satker,
    Tamu,
    connection
}