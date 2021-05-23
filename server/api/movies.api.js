var express = require("express");
var router = express.Router();
const { loginRequired } = require("../middlewares/authentication");

const moviesController = require("../controllers/movies.controller");

router.get("/", loginRequired, moviesController.list);
router.post("/", loginRequired, moviesController.create);
router.patch("/:id", loginRequired, moviesController.update);
router.delete("/:id", loginRequired, moviesController.delete);

module.exports = router;
