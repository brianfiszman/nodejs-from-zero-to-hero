const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { secret, tokenTimeout } = require("../config/env");

class UserController {
  async index(req, res) {
    try {
      const user = await User.find();

      res.json(user);
    } catch (e) {
      res.status(500).send(e.message);
    }
  }

  async show(req, res) {
    try {
      const { username } = req.params;
      const user = await User.findOne({ username });

      res.json(user);
    } catch (e) {
      res.status(500).send(e.message);
    }
  }

  async create(req, res) {
    try {
      const { username, password } = req.body;

      await User.create({ username, password });

      res.send("The user has been created.");
    } catch (e) {
      res.status(500).send(e.message);
    }
  }

  async update(req, res) {
    try {
      const { username } = req.params;
      const { newPassword } = req.body;

      const user = await User.updateOne({ username }, { password: newPassword });

      res.send(user);
    } catch (e) {
      res.status(500).send(e.message);
    }
  }

  async destroy(req, res) {
    try {
      const { username } = req.params;

      const user = await User.deleteOne({ username });

      res.send(user);
    } catch (e) {
      res.status(500).send("Something about delete broke!");
    }
  }

  async auth(req, res) {
    try {
      if (!User.checkCredentials(req.body.username, req.body.password)) {
        return res.send({mensaje: "Usuario o contraseña incorrectos"});
      }

      const token = jwt.sign({check: true}, secret, {expiresIn: tokenTimeout});

      return res.send({
        mensaje: 'Autenticación correcta',
        token
      });
    } catch (e) {
      console.log(e);
      res.status(500).send("Something broke!");
    }
  }
}

const userController = new UserController();

module.exports = userController;