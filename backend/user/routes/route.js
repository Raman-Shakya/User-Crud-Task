const express = require('express');
const [getUsers, addUsers, changePassword, removeUser] = require('../controller/controller');

const router = express.Router();

router.get('/', getUsers);
router.post('/', addUsers);
router.put('/reset-password', changePassword);
router.delete('/remove', removeUser);

module.exports = router;