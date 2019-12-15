const express = require('express');
const router = express.Router();

const loginRouter = require('./login.route');
const {enableCors} = require('../middlewares/cors.middleware');

router.use('/', enableCors);
router.use('/', loginRouter);

module.exports = router;