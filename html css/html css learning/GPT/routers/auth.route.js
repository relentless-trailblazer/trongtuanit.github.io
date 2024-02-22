const express = require("express");

const router = express.Router();
const asyncMiddleware = require("../middlewares/async.middleware");

const {signUp, validateToken, login} = require("../controller/auth.controller");

router
  .route('/auth/signup/')
  .post(
    asyncMiddleware(signUp) // Controller tạo tài khoản
  );

router
  .route('/auth/login')
  .post(
    asyncMiddleware(login) // Controller lấy tất cả tài khoản
  );
router
  .route('/auth/validateToken')
  .post(
    asyncMiddleware(validateToken) // Controller lấy tất cả tài khoản
  );

module.exports = router;
