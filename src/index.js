const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const { connectionUri } = require("./config/env");
const router = require("./routes");

const app = express();
const port = process.env.PORT;

console.log(connectionUri);

mongoose.connect(connectionUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(bodyParser.json());
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
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
