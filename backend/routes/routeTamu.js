const express = require('express');
const { handleGetAllTamu, handleGetTamuById, handleCreateTamu, handleUpdateTamu, handleDeleteAllTamu, handleDeleteTamuById } = require('../controllers/handleTamu');
const { auth } = require('../middleware/auth');

const app = express();

const getAllTamu = app.get("/tamu", auth, handleGetAllTamu);
const getTamuById = app.get("/tamu/:id", auth, handleGetTamuById);
const createTamu = app.post("/tamu", auth, handleCreateTamu);
const updateTamu = app.put("/tamu/:id", auth, handleUpdateTamu);
const deleteAllTamu = app.delete("/tamu", auth, handleDeleteAllTamu);
const deleteTamuById = app.delete("/tamu/:id", auth, handleDeleteTamuById);

module.exports = {
    getAllTamu,
    getTamuById,
    createTamu,
    updateTamu,
    deleteAllTamu,
    deleteTamuById
}