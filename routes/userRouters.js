const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/userController');

// Cuando el Front haga un POST a esta ruta, se ejecuta tu controlador
router.post('/register', registerUser);

module.exports = router;