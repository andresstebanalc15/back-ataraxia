const UserMandala = require("../models/userMandala");

const updateProgress = async (req, res) => {
  try {
    const { id_user, id_mandala, data } = req.body;
    const user = await UserMandala.findOne({
      id_user: id_user,
      id_mandala: id_mandala,
    });
    if (user === null) {
      const user = new UserMandala({
        id_user,
        id_mandala,
        data,
      });
      await user.save();
      res.json({ message: "Usuario creado exitosamente" });
    } else {
      user.data = data;
      await user.save();
      res.json({ message: "Mandala actualizado exitosamente" });
    }
    // await user.save();
    // res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al crear el usuario" });
  }
};

const getMandalaByUser = async (req, res) => {
  try {
    const { id_user, id_mandala } = req.body;

    const mandala = await UserMandala.findOne({ id_user, id_mandala });
    res.json(mandala);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener mandala" });
  }
};

module.exports = { updateProgress, getMandalaByUser };
