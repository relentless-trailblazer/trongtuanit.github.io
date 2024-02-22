const Order = require('../schema/Order'); // Import model đơn hàng
const User = require('../schema/User'); // Import model người dùng

module.exports.createOrder = async (req, res, next) => {
  try {
    
    const userId = req.userId; 
    const { products, totalQuantity, address } = req.body;

    // Tạo đơn hàng
    const order = await Order.create({
      user: userId, 
      products,
      totalQuantity,
      address,
      status
    });

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: 'Không thể tạo đơn hàng' });
  }
};

module.exports.getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Không thể tạo đơn hàng' });
  }
};
module.exports.getAllOrdersByUser = async (req, res, next) => {
  try {
    const userId = req.userId; 
    const orders = await Order.find({
      user: userId
    });
    res.status(200).json({
      orders
    });
  } catch (error) {
    res.status(500).json({ error: 'Không thể tạo đơn hàng' });
  }
};


module.exports.updateOrder = async (req, res, next) => {
  try {
    const { orderId } = req.params;
    const { products, totalQuantity, address, status } = req.body;

    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ error: 'Đơn hàng không tồn tại' });
    }
    order.products = products;
    order.totalQuantity = totalQuantity;
    order.address = address;
    order.status = status;
    
    await order.save();

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: 'Không thể cập nhật đơn hàng' });
  }
};