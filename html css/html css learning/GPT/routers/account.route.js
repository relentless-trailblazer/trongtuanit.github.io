const express = require('express');
const router = express.Router();
const asyncMiddleware = require('../middlewares/async.middleware');
const authMiddleware = require("../middlewares/auth.middleware");
const {
  getAllAccounts,
  getUserById,
  createNewUser,
  updateUser,
  updatePersonalInformation,
} = require('../controller/accounts.controller');


router
  .route('/account/create/')
  .post(
    asyncMiddleware(createNewUser) // Controller tạo tài khoản
  );

router
  .route('/accounts/')
  .get(
    asyncMiddleware(getAllAccounts) // Controller lấy tất cả tài khoản
  );
router
  .route('/accounts/:userId')
  .get(
    asyncMiddleware(authMiddleware),
    asyncMiddleware(getUserById) // Controller lấy tất cả theo id
  );


router
  .route('/account/update/:userId')
  .put(
    asyncMiddleware(authMiddleware), // Middleware kiểm tra xác thực
    asyncMiddleware(updateUser) // Controller cập nhật thông tin tài khoản
  );

router
  .route('/account/personal-infomation/')
  .put(
    asyncMiddleware(authMiddleware), // Middleware kiểm tra xác thực
    asyncMiddleware(updatePersonalInformation) // Controller cập nhật thông tin tài khoản
  );

module.exports = router;
