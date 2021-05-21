const User = require("../models/User");

const userController = {};

const {
  AppError,
  catchAsync,
  sendResponse,
} = require("../helpers/utils.helper");

userController.create = catchAsync(async (req, res, next) => {
  const user = await new User(req.body);
  await user.save();
  const accessToken = await user.generateToken();

  sendResponse(res, 201, "true", { user, accessToken }, null, "User created!!");
});

userController.list = catchAsync(async (req, res, next) => {
  const user = await User.find();
  sendResponse(res, 204, "true", { user }, null, "Get all users!");
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
  const tokenUserId = req.userId;
  const user = await User.findByIdAndDelete(
    tokenUserId,
    { ...req.body },
    { new: true }
  );
  sendResponse(res, 200, "true", { user }, null, "User updated!");
});

module.exports = userController;
