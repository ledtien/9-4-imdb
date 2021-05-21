const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const userSchema = Schema(
  {
    name: { type: String, required: false, unique: false, default: "" },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: false, unique: false },
    avatarUrl: { type: String, required: false, default: "" },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, saltRounds);
  next();
});

//..

userSchema.methods.generateToken = function () {
  const user = this;
  const token = jwt.sign({ id: user._id }, JWT_SECRET_KEY, {
    expiresIn: "365d",
  });
  return token;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
