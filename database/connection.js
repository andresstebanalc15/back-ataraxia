const mongoose = require("mongoose");
const dotenv = require("dotenv");

const connectDB = async () => {
  dotenv.config();
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexión exitosa a MongoDB Atlas");
  } catch (error) {
    console.error("Error al conectar a MongoDB Atlas", error);
  }
};

module.exports = connectDB;
