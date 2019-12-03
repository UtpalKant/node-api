const express = require('express');
const routes = express.Router();

const { getUsers, setUsers } = require('../src/user.module/user.controller');

routes.get('/getusers', getUsers);
routes.get('/setusers', setUsers);

module.exports = routes;