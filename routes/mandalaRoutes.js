const express = require("express");
const router = express.Router();
const mandalaController = require("../controllers/mandalaController");

// Ruta para obtener todos los usuarios
router.post("/", mandalaController.getMandala);

module.exports = router;
