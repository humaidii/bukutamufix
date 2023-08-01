const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { getAllAdmin, getAdminById, updateAdmin, deleteAdmin, deleteAdminById } = require("./routes/routeAdmin");
const { getAllSatker, getSatkerById, createSatker, updateSatker, deleteSatkerById, deleteAllSatker } = require("./routes/routeSatker");
const { getAllTamu, getTamuById, createTamu, updateTamu, deleteAllTamu, deleteTamuById } = require("./routes/routeTamu");
const { login, register } = require("./routes/routeAuth");


const port = process.env.PORT || 4323;
dotenv.config();
const app = express();
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors());

// test endpoint
app.get("/", (req, res) => {
    res.send("Your Server is Up and Running");
});

// admin endpoint
app.use(getAllAdmin, getAdminById, updateAdmin, deleteAdmin, deleteAdminById)

// satker endpoint
app.use(getAllSatker, getSatkerById, createSatker, updateSatker, deleteSatkerById, deleteAllSatker);

// tamu endpoint
app.use(getAllTamu, getTamuById, createTamu, updateTamu, deleteAllTamu, deleteTamuById);

// autentikasi
app.use(login, register);

app.listen(port, '0.0.0.0', function() {
    console.log('Your Server is Up and Running')
})