const express = require('express');
const { handleGetSatkerAll, handleGetSatkerById, handleCreateSatker, handleUpdateSatker, handleDeleteAllSatker, handleDeleteSatkerById } = require('../controllers/handleSatker');
const { auth } = require('../middleware/auth');

const app = express();

const getAllSatker = app.get("/satker", auth, handleGetSatkerAll);
const getSatkerById = app.get("/satker/:id", auth, handleGetSatkerById);
const createSatker = app.post("/satker", auth, handleCreateSatker);
const updateSatker = app.put("/satker/:id", auth, handleUpdateSatker);
const deleteAllSatker = app.delete("/satker", auth, handleDeleteAllSatker);
const deleteSatkerById = app.delete("/satker/:id", auth, handleDeleteSatkerById);

module.exports = {
    getAllSatker,
    getSatkerById,
    createSatker,
    updateSatker,
    deleteAllSatker,
    deleteSatkerById
}