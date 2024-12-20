const express = require('express');
const [getUsers, login, addUsers, changePassword, removeUser] = require('../controller/controller');
const isAuthenticated = require('../controller/authController');

const router = express.Router();

router.get('/', getUsers);
router.post('/', addUsers);
router.get('/auth', isAuthenticated);
router.post('/login', login);
router.put('/reset-password', changePassword);
router.delete('/remove', removeUser);

module.exports = router;