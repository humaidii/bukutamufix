const express = require('express');
const { handleGetAdminAll, handleGetAdminById, handleUpdateAdmin, handleDeleteAllAdmin, handleDeleteAdminById } = require('../controllers/handleAdmin');
const { auth } = require('../middleware/auth');

const app = express();

const getAllAdmin = app.get("/admin", auth, handleGetAdminAll);
const getAdminById = app.get("/admin/:id", auth, handleGetAdminById);
const updateAdmin = app.put("/admin/:id", auth, handleUpdateAdmin);
const deleteAdmin = app.delete("/admin", auth, handleDeleteAllAdmin);
const deleteAdminById = app.delete("/admin/:id", auth, handleDeleteAdminById);

module.exports = {
    getAllAdmin,
    getAdminById,
    updateAdmin,
    deleteAdmin,
    deleteAdminById
}