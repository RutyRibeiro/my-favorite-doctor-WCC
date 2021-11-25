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
        res.status(500).send({
            message: error.message
        })

    }
}

module.exports = {createDoctor}