const mongoose = require("mongoose");

const cartSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    products: [{
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
      },
      quantity: Number,
    }],
    totalQuantity: Number,
    status: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema, "Cart");
