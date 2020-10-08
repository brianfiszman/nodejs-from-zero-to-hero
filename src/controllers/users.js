const User = require("../models/user");

class UserController {
  async index(req, res) {
    try {
      const user = await User.find();

      res.json(user);
    } catch (e) {
      console.log(e);
      res.status(500).send("Something broke!");
    }
  }

  async show(req, res) {
    try {
      const { username } = req.params;
      const user = await User.findOne({ username });

      res.json(user);
    } catch (e) {
      console.log(e);
      res.status(500).send("Something broke!");
    }
  }

  async create(req, res) {
    try {
      const { username, password } = req.body;

      await User.create({ username, password });

      res.send("The user has been created.");
    } catch (e) {
      console.log(e);
      res.status(500).send("Something broke!");
    }
  }

  async update(req, res) {
    try {
      const { username } = req.params;
      const { newPassword } = req.body;

      const user = await User.updateOne({ username }, { password: newPassword });

      res.send(user);
    } catch (e) {
      res.status(500).send("Something broke!");
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
}

const userController = new UserController();

module.exports = userController;
