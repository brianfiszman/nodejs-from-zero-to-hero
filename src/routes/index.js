const express = require("express");
const router = express.Router();
const postController = require("../controllers/posts");

router.get("/", function (req, res) {
  res.send("Hello, World!");
  res.end();
});

// router.get("/posts", postController.listPosts);
router.get("/posts", postController.index);
router.get("/posts/:name", postController.show);
router.post("/posts", postController.create);
router.put("/posts/:name", postController.update);
router.delete("/posts/:name", postController.destroy);

router.get("/users", userController.index);
router.get("/users/:username", userController.show);
router.post("/users", userController.create);
router.put("/users/:username", userController.update);
router.delete("/users/:username", userController.destroy);

module.exports = router;
