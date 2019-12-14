const express = require('express');
const routes = express.Router();

const { getUsers, setUsers } = require('../src/login.module/login.controller')

routes.get('/login', getUsers);
routes.post('/register', setUsers)

module.exports = routes;