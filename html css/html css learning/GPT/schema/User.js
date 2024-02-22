const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const Cart = require("./CartModel"); // Đảm bảo đã import mô hình Cart

const ROLE = [
  'user',
  'system',
  'assistant'
]

const userSchema = mongoose.Schema(
  {
    name: String,
    phoneNumber: String,
    username: String,
    password: String,
    role: {
      type: String,
      enum: ROLE
    }
  },
  { timestamps: true }
);

userSchema.set("toJSON", {
  transform: function (doc, ret, options) {
    delete ret.password;
    return ret;
  },
});

userSchema.pre("save", function (next) {
  const user = this;
  user.password = bcrypt.hashSync(user.password, 10);
  next();
});

userSchema.pre("findOneAndUpdate", function (next) {
  const _update = { ...this.getUpdate() };

  if (_update.password) {
    _update.password = bcrypt.hashSync(_update.password, 10);
  }

  this.setUpdate(_update);
  next();
});

userSchema.post("save", function (user, next) {
  Cart.create({
    user: user._id,
    status: 'empty',
    products: [],
    totalQuantity: 0,
  });
  next();
});

module.exports = mongoose.model("User", userSchema, "User");
