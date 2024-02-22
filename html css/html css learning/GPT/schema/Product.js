const mongoose = require('mongoose');

// Định nghĩa schema cho sản phẩm
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Tên sản phẩm là trường bắt buộc
  },
  price: {
    type: Number,
    required: true, // Giá sản phẩm là trường bắt buộc
  },
  unit: {
    type: String,
  },
  images: [{
    type: String, // Loại dữ liệu của các hình ảnh trong mảng
  }],
});

// Tạo một model từ schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
