const express = require("express");
const connectDB = require("./database/connection");
const userRoutes = require("./routes/userRoutes");
const phraseRoutes = require("./routes/phraseRoutes");
const mandalaRoutes = require("./routes/mandalaRoutes");
const userMandalaRoutes = require("./routes/userMandalaRoutes");

const dotenv = require("dotenv");
const cors = require("cors");

const app = express();

dotenv.config();
app.use(cors());

// Configuración de la aplicación
app.use(express.json());

// Conexión a la base de datos
connectDB();

app.use("/users", userRoutes);
app.use("/phrase", phraseRoutes);
app.use("/mandala", mandalaRoutes);
app.use("/userMandala", userMandalaRoutes);

app.get("/", (req, res) => {
  res.send("¡Bienvenido a la API!");
});

app.listen(process.env.PORT, () => {
  console.log(
    `Servidor corriendo en el puerto http://localhost:${process.env.PORT}`
  );
});
