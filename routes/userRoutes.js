const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Ruta para obtener todos los usuarios
router.get("/", userController.getAllUsers);

// Ruta para crear un nuevo usuario
router.post("/", userController.createUser);

module.exports = router;
