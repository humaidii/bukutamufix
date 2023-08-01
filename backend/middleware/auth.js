const jwt = require('jsonwebtoken');
const { unauthorized, notfound } = require('../controllers/statuscode');
const { Admin } = require('../db/models');
require('dotenv').config();

const auth = (req, res, next) => {
    let response = {}
    // const authHeader = req.headers['authorization'];
    const token = req.header('authorization');
    // const token = authHeader && authHeader.split(' ')[1];

    if(token == null){
        response = {
            status: 'ERROR',
            message: "Authorization Failed"
        }
        res.status(unauthorized).json(response);
        return
    }

    jwt.verify(token, process.env.JWT_SECRET, (error, admin) => {
        console.log(error)
        if(error) {
            response = {
                status: "ERROR",
                message: error
            }
            res.status(unauthorized).json(response)
            return
        }
        req.admin = admin
        next()
    })
}



module.exports = {
    auth,
}