const path = require('path');
const multer = require('multer');
const Product = require('../schema/Product');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Đường dẫn đích sẽ bao gồm ID hoặc tên sản phẩm
    const destinationPath = path.join('public/product', req.body.productID || req.body.name);
    cb(null, destinationPath);
  },
  filename: function (req, file, cb) {
    const extname = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + Date.now() + extname); // Đặt tên cho file ảnh
  },
});

module.exports.createProduct = async (req, res, next) => {
	try {
		const productsData = req.body.products;

		const createdProducts = await Product.create(productsData);

		res.status(201).json(createdProducts);
	} catch (error) {
		res.status(500).json({ error: 'Không thể tạo sản phẩm' });
	}
}

module.exports.createProductWithImages = async (req, res, next) => {
	try {
    const { name, price, unit } = req.body;
    const images = req.files.map((file) => '/product/' + file.filename);

    const product = await Product.create({
      name,
      price,
      unit,
      images,
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Không thể tạo sản phẩm' });
  }
}

module.exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Không thể lấy danh sách sản phẩm' });
  }
};