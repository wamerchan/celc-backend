const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController');

/**
 * Authentication routes
 */

// POST /api/auth/register - Register a new user
router.post('/register', AuthController.register);

// POST /api/auth/login - Login user
router.post('/login', AuthController.login);

module.exports = router;
