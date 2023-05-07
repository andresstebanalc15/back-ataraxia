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

module.exports = { getAllUsers, createUser };
