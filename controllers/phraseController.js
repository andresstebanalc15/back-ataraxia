const Phrase = require("../models/phrase");

const getAllPhrases = async (req, res) => {
  try {
    const phrases = await Phrase.find();
    res.json(phrases);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las frases" });
  }
};

module.exports = { getAllPhrases };
