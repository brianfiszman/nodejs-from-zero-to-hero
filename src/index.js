const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes");

const app = express();
const port = process.env.PORT;
const mongohost = process.env.MONGO_HOST;
const mongopass = process.env.MONGO_PASS;
const mongoport = process.env.MONGO_PORT;
const mongodb = process.env.MONGO_DB;

app.use(router);

mongoose.connect("mongodb://" + mongohost + "/" + mongodb, {
  useNewUrlParser: true
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function () {
    console.log("me conecté!");
  });
});

/*
 * TODO con una estructura clasica de MVC
 * Crear un schema de Mongoose llamado Post
 * Que tenga name y description y estén validados
 *
 * Recuerden que para instalar librerías tienen
 * el yarn y que para la conexión a la mongodb
 * ya tienen todo lo que necesitan en las variables
 * de entorno.
 *
 * Luego creen un CRUD básico para Post siguiendo
 * las convenciones REST
 *
 * En caso de dudas llamar al 0800-BRIAN
 */
