const mongoose = require("mongoose");

const userMandalaSchema = new mongoose.Schema({
  id_user: {
    type: String,
    required: true,
  },
  id_mandala: {
    type: String,
    required: true,
  },
  data: {
    type: Array,
    required: false,
  },
});

const UserMandala = mongoose.model("user_mandalas", userMandalaSchema);

module.exports = UserMandala;
