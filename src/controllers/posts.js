const Post = require("../models/post");

class PostController {
  //   constructor() {
  //     hint: el controller debe hacer lo menos posible
  //     guardá la instancia del modelo directo en la memoria de la clase
  //     usa el keyword this para eso
  //  }

  async index(req, res) {
    try {
      const post = await Post.find();

      res.json(post);
    } catch (e) {
      console.log(e);
      res.status(500).send("Something broke!");
    }
  }

  async show(req, res) {
    try {
      const { name } = req.params;
      const post = await Post.findOne({ name });

      res.json(post);
    } catch (e) {
      console.log(e);
      res.status(500).send("Something broke!");
    }
  }

  async create(req, res) {
    try {
      const { name, description } = req.body;

      await Post.create({ name, description });

      res.send("The post has been created.");
    } catch (e) {
      console.log(e);
      res.status(500).send("Something broke!");
    }
  }

  async update(req, res) {
    try {
      const { name } = req.params;
      const { newName } = req.body;

      const post = await Post.updateOne({ name }, { name: newName });

      res.send(post);
    } catch (e) {
      res.status(500).send("Something broke!");
    }
  }

  async destroy(req, res) {
    try {
      const { name } = req.params;

      const post = await Post.deleteOne({ name });

      res.send(post);
    } catch (e) {
      res.status(500).send("Something about delete broke!");
    }
  }
}

const postController = new PostController();

module.exports = postController;
