const express = require('express');
const router = express.Router();
const LineController = require('../controllers/lineController');
const { authenticateToken } = require('../middleware/auth');

/**
 * Line routes - All routes are protected with JWT
 */

// POST /api/lines - Create a new line
router.post('/', authenticateToken, LineController.create);

// GET /api/lines - Get all lines
router.get('/', authenticateToken, LineController.getAll);

// GET /api/lines/:id - Get line by ID
router.get('/:id', authenticateToken, LineController.getById);

// PUT /api/lines/:id - Update line
router.put('/:id', authenticateToken, LineController.update);

// DELETE /api/lines/:id - Delete line
router.delete('/:id', authenticateToken, LineController.delete);

module.exports = router;
