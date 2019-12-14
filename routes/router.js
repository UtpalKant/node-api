const express = require('express');
const router = express.Router();

const userRouter = require('./user.route');

router.use('/user', userRouter);
router.use('/', loginRouter);

module.exports = router;