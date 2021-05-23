const User = require("../models/User");
const bcrypt = require("bcrypt");
const userController = {};

const {
  AppError,
  catchAsync,
  sendResponse,
} = require("../helpers/utils.helper");

userController.create = catchAsync(async (req, res, next) => {
  const user = await new User({ ...req.body });
  await user.save();
  const accessToken = await user.generateToken();

  sendResponse(res, 201, "true", { user, accessToken }, null, "User created!!");
});

userController.list = catchAsync(async (req, res, next) => {
  const user = await User.find({});
  sendResponse(res, 200, "true", { user }, null, "Get all users!");
});

userController.update = catchAsync(async (req, res, next) => {
  const tokenUserId = req.userId;
  const user = await User.findByIdAndUpdate(
    tokenUserId,
    { ...req.body },
    { new: true }
  );
  sendResponse(res, 200, "true", { user }, null, "User updated!");
});

userController.delete = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.params.id);
  sendResponse(res, 204, "true", { user }, null, "User updated!");
});

userController.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user)
    return res
      .status(400)
      .json({ success: false, error: "Wrong email or password!" });
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    return res.status(400).json({
      success: false,
      error: "Wrong email or password!",
    });
  accessToken = await user.generateToken();
  sendResponse(res, 200, "true", { accessToken }, "Logged in successfully!");
});

module.exports = userController;
