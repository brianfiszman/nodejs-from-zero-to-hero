const express = require("express");
const router = express.Router();
const postController = require("../controllers/posts");
const userController = require("../controllers/users");
const { verifyToken } = require("../middlewares/checkToken");

router.get("/", function (req, res) {
  res.send("Hello, World!");
  res.end();
});

// router.get("/posts", postController.listPosts);
router.get("/posts", postController.index);
router.get("/posts/:name", postController.show);
router.post("/posts", verifyToken, postController.create);
router.put("/posts/:name", verifyToken, postController.update);
router.delete("/posts/:name", verifyToken, postController.destroy);

router.get("/users", userController.index);
router.get("/users/:username", userController.show);
router.post("/users", userController.create);
router.put("/users/:username", verifyToken, userController.update);
router.delete("/users/:username", verifyToken, userController.destroy);

router.post("/auth", userController.auth);

module.exports = router;
