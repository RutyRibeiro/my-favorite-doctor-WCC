const Doctor = require("../models/doctors")

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
            }
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
module.exports = {
    createDoctor,
    getAllDoctors,

}