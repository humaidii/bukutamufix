const { Admin } = require("../db/models");
const { ok, servererror, notfound, created, bad } = require("./statuscode");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const SALT = Number(process.env.PASSWORD_SALT);

const handleGetAdminAll = async (req, res) => {
    try {
        const admin = await Admin.findAll();
        const response = {
            status: "SUCCESS",
            message: "Data Admin Berhasil Ditampilkan",
            meta: {
                total: admin.length
            },
            data: admin,
        };
        res.status(ok).json(response)
        return
    } catch (error) {
        response = {
            status: "ERROR",
            message: error.message
        }
        return res.status(servererror).json(response);
    }
}

const handleGetAdminById = async (req, res) => {
    try {
        const id = req.params.id;
        const admin = await Admin.findOne({
            where: {
                id : id
            }
        });
        let response = {
            status: "SUCCESS",
            message: "Data Admin Berhasil Ditampilkan",
            data: admin
        }
        if(!admin){
            res.status(notfound);
            res.json({
                message: "Data Admin Tidak Ditemukan"
            });
            return
        }
        res.status(ok).json(response)
        response
    } catch (error) {
        response = {
            status: "ERROR",
            message: error.message
        }
        return res.status(servererror).json(response);
    }
};

// const handleCreateAdmin = async(req, res) => {
//     let response = {}
//     try {
//         const newAdmin = await Admin.create({
//             name: req.body.name,
//             username: req.body.username,
//             password: req.body.password
//         });
//         response = {
//             status: "SUCCESS",
//             message: "Data Admin Berhasil Ditambah",
//             data: newAdmin
//         }
//         return res.status(created).json(response);
//     } catch (error) {
//         response = {
//             status: "ERROR",
//             message: error.message
//         }
//         return res.status(bad).json(response)
//     }
// }

const handleUpdateAdmin = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const admin = await Admin.findOne({
            where: {
                id: id
            }
        });
        if(!admin){
            return res.status(notfound).json({
                message: "Data Admin Tidak Ditemukan"
            });
        }
        const name = body.name;
        const username = body.username;
        const password = body.password;

        const updateAdmin = await Admin.update({
            name: name,
            username: username,
            password: password,
        }, {
            where: {
                id: id
            }
        });

        if(updateAdmin) {
            response = {
                status: "SUCCESS",
                message: "Data Admin Berhasil Diubah",
            }
            return res.status(created).json(response);
        }
    } catch (error) {
        return res.status(bad).json({
            error: error.message
        });
    };
}

const handleDeleteAdminById = async (req, res) => {
    const id = req.params.id;

    try {
        const deleteAdmin = await Admin.destroy({
            where: {
                id:id
            },
        });
        if(deleteAdmin) {
            return res.status(ok).json({
                message: "Data Admin Berhasil Dihapus"
            });
        }else{
            return res.status(notfound).json({
                error: "Data Admin Tidak Ditemukan"
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(servererror).json({
            error: "Server Error",
            message: error.message
        });
    }
}

const handleDeleteAllAdmin = async (req, res) => {
    try {
        await Admin.destroy({
            where: {},
            truncate: true,
        });
        return res.status(ok).json({
            message: "Data Admin Berhasil Dihapus Seluruhnya"
        });
    } catch (error) {
        return res.status(servererror).json({
            error: "Server Error",
            message: error.message
        });
    };
};

module.exports = {
    handleGetAdminAll,
    handleGetAdminById,
    handleUpdateAdmin,
    handleDeleteAllAdmin,
    handleDeleteAdminById
}