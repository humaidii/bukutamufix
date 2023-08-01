require("dotenv").config;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SALT = Number(process.env.PASSWORD_SALT);
const JWT_SECRET = process.env.JWT_SECRET;

const { Admin } = require("../db/models");
const { bad, notfound, ok, created, servererror, unauthorized } = require("./statuscode");


const handleLogin = async(req, res) => {
    const audience = req.header('x-audience');
    
    const username = req.body.username;
    const password = req.body.password;
    
    const admin = await Admin.findOne({
        where: {
            username,
        }
    });
    
    if(!admin){
        res.status(notfound);
        res.json({
            message: 'Admin not Found'
        });
        
        return;
    }
    
    if(!bcrypt.compareSync(password, admin.password)){
        res.status(bad);
        res.json({
            error : "wrong password",
        });
        
        return;
    }
    
    const token = jwt.sign({
        sub : admin.id,
        iss : 'kemenag',
        aud : audience,
        exp : parseInt(((new Date()).getTime() / 1000) + 5 * 60 * 60),
    }, JWT_SECRET);
    
    res.status(ok);
    res.json({
        message : "Login Success",
        token : token
    });
    return
}

const handleRegister = async (req, res) => {
    try { 
        const {name, username, password} = req.body;
    
        const admin = await Admin.findOne({
            where: {
                username,
            }
        });
    
        if(admin) {
            res.status(bad);
            res.json({
                error: 'Admin Already Exist',
            });
            return;
        } 
    
        const encryptedPassword = bcrypt.hashSync(password, SALT);
    
        const createUser = await Admin.create({
            name,
            username,
            password: encryptedPassword
        })
    
        res.status(created).json({
            message: "SUCCESSFULY",
            data: createUser
        })
        return;
    } catch (error) {
        return res.status(bad).json(error);
    }
}
const handleChangePassword = async (req, res) => {
    try {
        const username = req.query.username;
        const password = req.body.passowrd;

        const admin = await Admin.findOne({
            where: {
                username,
            }
        });

        if(!admin){
            res.status(notfound).json({
                message: "Username Tidak Ditemukan"
            });
            return;
        };

        const encryptedPassword = bcrypt.hashSync(password, SALT);
        const changePassword = encryptedPassword;
        const changepassword = await Admin.update({
            password: changePassword
        }, {
            where: {
                username: username
            }
        })

        const response = {
            status: "SUCCESS",
            message: "Ganti Password Berhasil"
        }
        res.status(ok).json(response)
        return
    } catch (error) {
        res.status(servererror).json({
            message: error.message
        });
        return;
    }
}

module.exports = {
    handleLogin,
    handleChangePassword,
    handleRegister
}