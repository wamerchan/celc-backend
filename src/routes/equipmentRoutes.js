const express = require('express');
const router = express.Router();
const EquipmentController = require('../controllers/equipmentController');
const { authenticateToken } = require('../middleware/auth');

/**
 * Equipment routes - All routes are protected with JWT
 */

// POST /api/equipment - Create new equipment
router.post('/', authenticateToken, EquipmentController.create);

// GET /api/equipment - Get all equipment
router.get('/', authenticateToken, EquipmentController.getAll);

// GET /api/equipment/:id - Get equipment by ID
router.get('/:id', authenticateToken, EquipmentController.getById);

// GET /api/equipment/line/:lineId - Get equipment by line
router.get('/line/:lineId', authenticateToken, EquipmentController.getByLine);

// PUT /api/equipment/:id - Update equipment
router.put('/:id', authenticateToken, EquipmentController.update);

// DELETE /api/equipment/:id - Delete equipment
router.delete('/:id', authenticateToken, EquipmentController.delete);

module.exports = router;
