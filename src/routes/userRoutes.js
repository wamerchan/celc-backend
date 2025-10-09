const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const { authenticateToken } = require('../middleware/auth');

/**
 * User routes - All routes are protected with JWT
 */

// GET /api/users - Get all users
router.get('/', authenticateToken, UserController.getAll);

// GET /api/users/:id - Get user by ID
router.get('/:id', authenticateToken, UserController.getById);

// PUT /api/users/:id - Update user
router.put('/:id', authenticateToken, UserController.update);

// DELETE /api/users/:id - Delete user
router.delete('/:id', authenticateToken, UserController.delete);

module.exports = router;
