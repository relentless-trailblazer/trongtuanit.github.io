const express = require('express');
const router = express.Router();
const asyncMiddleware = require('../middlewares/async.middleware');
const authMiddleware = require("../middlewares/auth.middleware");
const roleMiddleware = require("../middlewares/role.middleware");
const { createOrder, updateOrder, getAllOrders, getAllOrdersByUser } = require('../controller/order.controller');

router
	.route('/orders')
	.post(asyncMiddleware(authMiddleware), asyncMiddleware(createOrder));

router
	.route('/orders/:orderId')
	.put(asyncMiddleware(authMiddleware),
		asyncMiddleware(updateOrder)
	);

router
	.route('/orders')
	.get(asyncMiddleware(authMiddleware), 
		asyncMiddleware(roleMiddleware('system')), 
		asyncMiddleware(getAllOrders));
router
	.route('/orders-by-users')
	.get(asyncMiddleware(authMiddleware), 
		asyncMiddleware(getAllOrdersByUser));

module.exports = router;
