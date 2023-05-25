const Mandala = require("../models/mandala");

const getMandala = async (req, res) => {
  try {
    const { _id } = req.body;

    const mandala = await Mandala.findOne({ _id });
    res.json(mandala);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener mandala" });
  }
};

module.exports = { getMandala };
