const path = require('path');
const multer = require('multer');
const express = require("express");
const typeRole = require("../constants/typeRole");
const router = express.Router();
const asyncMiddleware = require("../middlewares/async.middleware");
const authMiddleware = require("../middlewares/auth.middleware");
const roleMiddleware = require("../middlewares/role.middleware");
const {
	createProduct,
	createProductWithImages,
	getAllProducts,
} = require("../controller/product.controller.js");

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		const destinationPath = path.join('public/product', req.body.name);
		cb(null, destinationPath);
	},
	filename: function (req, file, cb) {
		const extname = path.extname(file.originalname);
		cb(null, file.fieldname + '-' + Date.now() + extname); 
	},
});

const upload = multer({ storage: storage });

router
	.route("/products/create/")
	.post(
		asyncMiddleware(authMiddleware),
		asyncMiddleware(roleMiddleware(typeRole.SYSTEM)),
		upload.array('images', 10),
		asyncMiddleware(createProductWithImages)
	)

router
	.route("/products/create-with-img-links/")
	.post(
		asyncMiddleware(authMiddleware),
		asyncMiddleware(roleMiddleware(typeRole.SYSTEM)),
		asyncMiddleware(createProduct)
	)
router
	.route("/products/")
	.get(
		asyncMiddleware(getAllProducts)
	)


module.exports = router;
