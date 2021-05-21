var express = require("express");
var router = express.Router();
const { loginRequired } = require("../middlewares/authentication");

const userController = require("../controllers/users.controller");

router.get("/", loginRequired, userController.list);
router.post("/", userController.create);
router.patch("/:id", loginRequired, userController.update);
router.delete("/:id", loginRequired, userController.delete);

module.exports = router;
