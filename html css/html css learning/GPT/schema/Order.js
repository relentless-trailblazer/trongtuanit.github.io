const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User', // Tham chiếu đến model User
	},
	products: [
		{
			product: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Product', // Tham chiếu đến model Sản phẩm
			},
			quantity: {
				type: Number,
				required: true,
			},
		},
	],
	totalQuantity: {
		type: Number,
		required: true,
	},
	status: {
		type: String,
		enum: ['Chưa xem', 'Đã xem', 'Huỷ', 'Đã lấy hàng'],
		default: 'Chưa xem',
	},
	address: String
});

orderSchema.pre('save', function (next) {
	let totalQuantity = 0;

	for (const productItem of this.products) {
		totalQuantity += productItem.price * productItem.quantity;
	}

	this.totalQuantity = totalQuantity;
	next();
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;