const Cart = require('../schema/Cart');

module.exports.createCart = async (req, res) => {
  try {
    const { user, products, totalQuantity, status, address } = req.body;
    const cart = new Cart({ user, products, totalQuantity, status, address });
    const savedCart = await cart.save();
    res.status(201).json({
      statusCode: 201,
      cart: savedCart,
    });
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi tạo giỏ hàng' });
  }
};

module.exports.clearCart = async (req, res) => {
  try {
    const userId = req.userId; // Lấy userId từ request params
    const cart = await Cart.findOne({ user: userId });
    cart.products = [];
    cart.totalQuantity = 0;
    cart.status = 'empty';

    const savedCart = await cart.save();

    res.status(200).json({
      status: 'OK',
      cart: savedCart,
    });
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi lấy giỏ hàng theo userId' });
  }
};

module.exports.updateCartByUserId = async (req, res) => {
  try {
    const userId = req.userId; // Lấy userId từ request params
    const { products, totalQuantity, status } = req.body;

    const updatedCart = await Cart.findOneAndUpdate(
      { user: userId },
      { products, totalQuantity, status },
      { new: true }
    );

    if (!updatedCart) {
      res.status(404).json({ error: 'Không tìm thấy giỏ hàng để cập nhật' });
    } else {
      res.status(200).json({
        status: 'OK',
        cart: updatedCart,
      });
    }
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi cập nhật giỏ hàng theo userId' });
  }
};

module.exports.deleteItemInCart = async (req, res) => {
  try {
    const { productIds } = req.body;

    const userId = req.userId;
    const cart = await Cart.findOne({ user: userId });

    productIds.forEach(productId => {
      const index = cart.products.findIndex(p => p._id === productId);
      if(index !== -1) {
        cart.products.splice(index, 1);
      }
    })

    const savedCart = await cart.save();
    
    res.status(200).json({
      status: 'OK', 
      cart: savedCart,
    });
    
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi cập nhật giỏ hàng theo userId' });
  }
};