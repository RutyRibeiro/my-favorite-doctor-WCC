const Doctor = require("../models/doctors");

const createDoctor = async (req, res) => {
    const {
        name,
        crm,
        speciality,
        clinic,
        phone,
        favorite
    } = req.body
    try {
        const doctor = await Doctor.create({
            name,
            crm,
            speciality,
            clinic,
            phone,
            favorite,
        })
        res.status(201).send(doctor)
        console.log(`Seu médico ${name} foi criado`)
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: error.message
        })

    }
};

const getAllDoctors = async (req, res) => {
    const favorite = req.query.favorite
    try {
        const where = favorite ? {
            where: {
                favorite
            },
            order:[['id','ASC']]
        } : {}
        const doctors = await Doctor.findAll(where)

        if (doctors && doctors.length > 0) {
            res.status(200).send(doctors)
        } else {
            // se não houver resultado de pesquisa
            res.status(204).send()
        }

    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: error.message
        })
    }
};

const getOneDoctor = async (req, res) => {
    const id = req.params.id

    try {
        const doctor = await Doctor.findOne({
            where: {
                id: id
            }
        })

        if (doctor) {
            res.status(200).send(doctor)
        } else {
            res.status(404).send({
                message: `Médico ${id} não encontrado`
            })
        }
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }

}

const updateDoctor = async (req, res) => {
    const id = req.params.id

    const {
        name,
        crm,
        speciality,
        clinic,
        phone,
        favorite
    } = req.body

    try {
        const rowsUpdated = await Doctor.update({
            name,
            crm,
            speciality,
            clinic,
            phone,
            favorite
        }, {where: { id: id}})

        if (rowsUpdated && rowsUpdated[0] > 0) {
            res.status(200).send({
                message: `Médico ${id} alterado`
            })
        } else {
            res.status(404).send({
                message: "Médico não encontrado para alteração"
            })
        }

    } catch (eror) {
        res.status(500).send({
            message: error.message
        })
    }

}

module.exports = {
    createDoctor,
    getAllDoctors,
    getOneDoctor,
    updateDoctor
};