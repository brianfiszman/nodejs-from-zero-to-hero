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

module.exports = router;
