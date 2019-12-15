const express = require('express');
const router = express.Router();

const loginRouter = require('./login.route');
const {enableCors} = require('../middlewares/cors.middleware');
const { validateAndRenewToken } = require('../middlewares/auth.middleware');

router.use(enableCors);
router.use(validateAndRenewToken, loginRouter);

module.exports = router;