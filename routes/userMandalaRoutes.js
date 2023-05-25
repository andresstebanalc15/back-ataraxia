const express = require("express");
const router = express.Router();
const userMandalaController = require("../controllers/userMandalaController");

// Ruta para obtener todos los usuarios
router.post("/", userMandalaController.updateProgress);
router.post("/userMandala", userMandalaController.getMandalaByUser);

module.exports = router;
