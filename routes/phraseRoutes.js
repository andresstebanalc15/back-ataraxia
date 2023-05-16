const express = require("express");
const router = express.Router();
const phraseController = require("../controllers/phraseController");

// Ruta para obtener todos los usuarios
router.get("/", phraseController.getAllPhrases);

module.exports = router;
