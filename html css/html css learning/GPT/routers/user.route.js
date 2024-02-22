const express = require("express");

const router = express.Router();
const asyncMiddleware = require("../middlewares/async.middleware");

const {
  letChat,
} = require("../controller/chat.controller.js");
const {
  createImage,
} = require("../controller/images.controller.js");

router
  .route("/chat")
  .post(asyncMiddleware(letChat))

router
  .route("/image/")
  .post(asyncMiddleware(createImage))

module.exports = router;
