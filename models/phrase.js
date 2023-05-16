const mongoose = require("mongoose");

const phraseSchema = new mongoose.Schema({
  phrase: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

const Phrase = mongoose.model("phrase", phraseSchema);

module.exports = Phrase;
