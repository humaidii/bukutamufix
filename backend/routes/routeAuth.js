const express = require('express');
const { handleLogin, handleRegister } = require('../controllers/handleAuth');

const app = express();

const login = app.post("/login", handleLogin);
const register = app.post("/auth/register", handleRegister);

module.exports = {
    login,
    register
}