const User = require("../models/user");

// Controlador para obtener todos los usuarios
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los usuarios" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    // Verificar las credenciales del usuario
    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }
    // Inicio de sesión exitoso
    return res.status(200).json({ message: "Inicio de sesión exitoso" });
  } catch (error) {
    console.log("Error al iniciar sesión:", error);
    return res.status(500).json({ message: "Error al iniciar sesión" });
  }
};

// Controlador para crear un nuevo usuario
const createUser = async (req, res) => {
  try {
    const { name1, name2, lastname1, lastname2, email, password } = req.body;
    const user = new User({
      name1,
      name2,
      lastname1,
      lastname2,
      email,
      password,
    });
    await user.save();
    res.json({ message: "Usuario creado exitosamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al crear el usuario" });
  }
};

module.exports = { getAllUsers, createUser, login };
