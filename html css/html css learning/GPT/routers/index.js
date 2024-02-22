const errorHandle = require("../middlewares/errorHandle");
const userUse = require("./user.route.js");
const order = require("./order.route.js");
const product = require("./product.route.js");
const account = require("./account.route.js");
const user = require("./user.route.js");
const auth = require("./auth.route.js");
const cart = require("./cart.route.js");

module.exports = (app) => {
	app.use("/gpt", userUse);
	app.use("", order);
	app.use("", account);
	app.use("", user);
	app.use("", product);
	app.use("", auth);
	app.use("", cart);
  	app.use(errorHandle);
};

