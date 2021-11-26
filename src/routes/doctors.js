const express = require ("express")
const router = express.Router()
const controller= require("../controllers/doctorsController")

router.post("/", controller.createDoctor)
router.get("/", controller.getAllDoctors)
// router.get("/", controller.getOneDoctor)

module.exports = router