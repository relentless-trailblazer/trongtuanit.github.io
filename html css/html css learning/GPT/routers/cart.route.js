const express = require('express');
const router = express.Router();
const asyncMiddleware = require('../middlewares/async.middleware');
const authMiddleware = require('../middlewares/auth.middleware');
const cartController = require('../controller/cart.controller');

// Route để tạo giỏ hàng mới
router.post(
  '/cart',
  asyncMiddleware(authMiddleware), 
  asyncMiddleware(cartController.createCart) // Xử lý yêu cầu tạo giỏ hàng
);

// Route để xóa toàn bộ giỏ hàng (clear cart)
router.delete(
  '/cart/clear',
  asyncMiddleware(authMiddleware), 
  asyncMiddleware(cartController.clearCart) // Xử lý yêu cầu xóa giỏ hàng
);

// Route để cập nhật giỏ hàng của một người dùng
router.put(
  '/cart/update',
  asyncMiddleware(authMiddleware), 
  asyncMiddleware(cartController.updateCartByUserId) // Xử lý yêu cầu cập nhật giỏ hàng
);

// Route để xóa một sản phẩm khỏi giỏ hàng
router.delete(
  '/cart/delete-items',
  asyncMiddleware(authMiddleware), 
  asyncMiddleware(cartController.deleteItemInCart) // Xử lý yêu cầu xóa sản phẩm khỏi giỏ hàng
);

module.exports = router;
