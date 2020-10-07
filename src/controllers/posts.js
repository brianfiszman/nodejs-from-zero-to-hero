class PostController {
  getPost(req, res) {
    const post = { name: "test", description: "test description" };

    res.send(post);
  }
}

const postController = new PostController();

module.exports = postController;
