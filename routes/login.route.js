const express = require('express');
const routes = express.Router();

const { getUsers, setUsers, testapi } = require('../src/login.module/login.controller')

routes.get('/login', getUsers);
routes.post('/register', setUsers)
routes.use('/check', testapi)

module.exports = routes;