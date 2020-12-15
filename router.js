const router = require("express").Router();
const { get, post, patch, remove } = require("./controllers");

router.get("/todos", get);

router.post("/todos", post);

router.patch("/todos/:id", patch);

router.delete("/todos/:id", remove);

module.exports = router;
