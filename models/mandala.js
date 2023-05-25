const mongoose = require("mongoose");

const mandalaSchema = new mongoose.Schema({
  data: {
    type: Array,
    required: true,
  },
});

const Mandala = mongoose.model("mandala", mandalaSchema);

module.exports = Mandala;
