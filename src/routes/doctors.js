const express = require ("express")
const router = express.Router()
const controller= require("../controllers/doctorsController")


router.post("/", controller.createDoctor)

module.exports = router