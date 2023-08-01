const { Tamu, Satker } = require("../db/models");
const { ok, notfound, created, bad, servererror } = require("./statuscode");

const handleGetAllTamu = async (req, res)=>{
    try {
        const tamu = await Tamu.findAll({
            include: {
                model: Satker,
                as: 'satker'
            }
        });
        const response = {
            status: "SUCCESS",
            message: "Data Tamu Berhasil Ditampilkan",
            meta: {
                total: tamu.length
            },
            data: tamu,
        };
        res.status(ok).json(response);
        return;
    } catch (error) {
        response = {
            status: "ERROR",
            message: error.message
        }
        return res.status(servererror).json(response);
    }
}

const handleGetTamuById = async(req, res) => {
    const id = req.params.id;
    try {
        const tamu = await Tamu.findOne({
            include: {
                model: Satker,
                as: 'satker'
            },
            where: {
                id: id
            }
        });
        let response = {
            data: tamu
        }
        if(!tamu){
            res.status(notfound);
            res.json({
                message: "Data Tamu Tidak Ditemukan"
            });
            return;
        }
        res.status(ok).json(response);
        return;
    } catch (error) {
        response = {
            status: "ERROR",
            message: error.message
        }
        return res.status(servererror).json(response);
    }
};

const handleCreateTamu = async(req, res) => {
    let response = {}
    try {
        const newTamu = await Tamu.create({
            nama: req.body.nama,
            tanggal: req.body.tanggal,
            jam: req.body.jam,
            instansi: req.body.instansi,
            keperluan: req.body.keperluan,
            id_satker: req.body.id_satker,
            no_hp: req.body.no_hp
        });
        response = {
            status: "SUCCESS",
            message: "Data Tamu Berhasil Ditambahkan",
            data: newTamu
        }
        return res.status(created).json(response);
    } catch (error) {
        response = {
            status: "ERROR",
            message: error.message
        }
        return res.status(bad).json(response)
    }
}

const handleUpdateTamu = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;

        const tamu = await Tamu.findOne({
            where: {
                id: id
            }
        });

        if(!tamu){
            return res.status(notfound).json({
                message: "Data Tamu Tidak Ditemukan"
            });
        }
        const nama = body.nama;
        const tanggal = body.tanggal;
        const jam = body.jam;
        const instansi = body.instansi;
        const keperluan = body.keperluan;
        const id_satker = body.id_satker;
        const no_hp = body.no_hp;

        const updateTamu = await Tamu.update({
            nama: nama,
            tanggal: tanggal,
            jam: jam,
            instansi: instansi,
            keperluan: keperluan,
            id_satker: id_satker,
            no_hp: no_hp
        }, {
            where: {
                id: id
            }
        });

        if(updateTamu) {
            response = {
                status: "SUCCESS",
                message: "Data Tamu Berhasil Diubah"
            }
            return res.status(created).json(response);
        }
    } catch (error) {
        return res.status(bad).json({
            error: error.message
        });
    };
}

// const handleUpdateTamu = async (req, res) => {
//     try {
//         const id = res.params.id;
//         const body = req.body;

//         const tamu = await Tamu.findOne({
//             where: {
//                 id: id
//             }
//         });

//         if(!tamu){
//             return res.status(notfound).json({
//                 message: "Data Tamu Tidak Ditemukan"
//             });
//         }

//         const nama = body.nama;
//         const tanggal = body.tanggal;
//         const jam = body.jam;
//         const instansi = body.instansi;
//         const keperluan = body.keperluan;
//         const id_satker = body.id_satker;
//         const no_hp = body.no_hp;

//         const updateTamu = await Tamu.update({
//             nama: nama,
//             tanggal: tanggal,
//             jam: jam,
//             instansi: instansi,
//             keperluan: keperluan,
//             id_satker: id_satker,
//             no_hp: no_hp,
//         }, {
//             where: {
//                 id: id
//             }
//         });

//         if(updateTamu){
//             response = {
//                 status: "SUCCESS",
//                 message: "Data Tamu Berhasil Diubah",
//             }
//             return res.status(created).json(response);
//         }
//     } catch (error) {
//         return res.status(bad).json({
//             error: error.message
//         });
//     };
// }

const handleDeleteTamuById = async (req, res) => {
    const id = req.params.id;

    try {
        const deleteTamu = await Tamu.destroy({
            where: {
                id: id
            },
        });
        if(deleteTamu){
            return res.status(ok).json({
                message: "Data Tamu Berhasil Dihapus"
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

const handleDeleteAllTamu = async (req, res) => {
    try {
        await Tamu.destroy({
            where: {},
            truncate: true,
        });
        return res.status(ok).json({
            message: "Data Tamu Berhasil Dihapus Seluruhnya"
        });
    } catch (error) {
        return res.status(servererror).json({
            error: "Server Error",
            message: error.message
        });
    };
};

module.exports = {
    handleGetAllTamu,
    handleGetTamuById,
    handleCreateTamu,
    handleUpdateTamu,
    handleDeleteAllTamu,
    handleDeleteTamuById
}