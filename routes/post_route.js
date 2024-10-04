const express = require("express");
const { postController } = require("../controllers");

const router = express.Router();

// create post
router.post("/create", postController.createPost);

// get post list
router.get("/getpost-List", postController.getPostList);

// delete post list
router.delete("/delete/:postId", postController.deleteRecord);

// update post id
router.put("/update/:postId", postController.updateRecord);

module.exports = router;