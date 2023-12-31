// server/routes/users.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const {getAllLogin,createLogin, createTransfer, getAllTransfer} = require('../controllers/UserController');

router.get('/login', getAllLogin);
router.post('/login', createLogin);
router.get('/transfer', getAllTransfer);
router.post('/transfer', createTransfer);


module.exports = router;
