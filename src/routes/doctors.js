const express = require ("express")
const router = express.Router()
const controller= require("../controllers/doctorsController")

router.post("/", controller.createDoctor)
router.get("/", controller.getAllDoctors)
router.get("/:id", controller.getOneDoctor)
router.put("/:id", controller.updateDoctor)
router.patch("/:id/favorite", controller.setFavorite)
router.delete("/:id/delete", controller.deleteDoctor)

module.exports = router
