const { Satker } = require("../db/models");
const { ok, notfound, created, bad, servererror } = require("./statuscode");
const handleGetSatkerAll = async (req, res) => {
    try {
        const satker = await Satker.findAll();
        const response = {
            status: "SUCCESS",
            message: "Data Satuan Kerja Berhasil Ditampilkan",
            meta: {
                total: satker.length
            },
            data: satker,
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

const handleGetSatkerById = async (req, res) => {
    try {
        const id = req.params.id;
        const satker = await Satker.findOne({
            where: {
                id: id
            }
        });
        let response = {
            status: "SUCCESS",
            message: "Data Satuan Kerja Berhasil Ditampilkan",
            data: satker
        }
        if(!satker){
            res.status(notfound);
            res.json({
                message: "Data Satuan Kerja Tidak Ditemukan"
            });
            return;
        }
        res.status(ok).json(response)
        return
    } catch (error) {
        response = {
            status: "ERROR",
            message: error.message
        }
        return res.status(servererror).json(response);
    }
};

const handleCreateSatker = async(req, res) => {
    let response = {}
    try {
        const newSatker = await Satker.create({
            nama_satker: req.body.nama_satker
        });
        response = {
            status: "SUCCESS",
            message: "Data Satker Berhasil Ditambah",
            data: newSatker
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

const handleUpdateSatker = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;

        const satker = await Satker.findOne({
            where: {
                id: id
            }
        });

        if(!satker){
            return res.status(notfound).json({
                message: "Data Satker Tidak Ditemukan"
            });
        }
        const nama_satker = body.nama_satker;

        const updateSatker = await Satker.update({
            nama_satker: nama_satker
        }, {
            where: {
                id: id
            }
        });

        if(updateSatker) {
            response = {
                status: "SUCCESS",
                message: "Data Satker Berhasil Diubah"
            }
            return res.status(created).json(response);
        }
    } catch (error) {
        return res.status(bad).json({
            error: error.message
        });
    };
}

const handleDeleteSatkerById = async (req, res) => {
    const id = req.params.id;

    try {
        const deleteSatker = await Satker.destroy({
            where: {
                id: id
            },
        });
        if(deleteSatker) {
            return res.status(ok).json({
                message: "Data Satker Berhasil Dihapus"
            });
        }else{
            return res.status(notfound).json({
                error: "Data Satker Tidak Ditemukan"
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

const handleDeleteAllSatker = async (req, res) => {
    try {
        await Satker.destroy({
            where: {},
            truncate: true,
        });
        return res.status(ok).json({
            message: "Data Satker Berhasil Dihapus Seluruhnya"
        });
    } catch (error) {
        return res.status(servererror).json({
            error: "Server Error",
            message: error.message
        });
    };
};

module.exports = {
    handleGetSatkerAll,
    handleGetSatkerById,
    handleCreateSatker,
    handleUpdateSatker,
    handleDeleteAllSatker,
    handleDeleteSatkerById
}