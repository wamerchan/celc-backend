const Equipment = require('../models/Equipment');

/**
 * Equipment Controller - Handles equipment CRUD operations
 */
class EquipmentController {
  /**
   * Create new equipment
   */
  static async create(req, res) {
    try {
      const { name, description, line_id, status, serial_number } = req.body;

      // Validate required fields
      if (!name) {
        return res.status(400).json({ error: 'Name is required' });
      }

      // Create equipment
      const equipment = await Equipment.create({ name, description, line_id, status, serial_number });

      res.status(201).json({
        message: 'Equipment created successfully',
        equipment
      });
    } catch (error) {
      console.error('Create equipment error:', error);
      res.status(500).json({ error: 'Error creating equipment' });
    }
  }

  /**
   * Get all equipment
   */
  static async getAll(req, res) {
    try {
      const equipment = await Equipment.findAll();
      res.status(200).json({ equipment });
    } catch (error) {
      console.error('Get equipment error:', error);
      res.status(500).json({ error: 'Error fetching equipment' });
    }
  }

  /**
   * Get equipment by ID
   */
  static async getById(req, res) {
    try {
      const { id } = req.params;
      const equipment = await Equipment.findById(id);

      if (!equipment) {
        return res.status(404).json({ error: 'Equipment not found' });
      }

      res.status(200).json({ equipment });
    } catch (error) {
      console.error('Get equipment error:', error);
      res.status(500).json({ error: 'Error fetching equipment' });
    }
  }

  /**
   * Get equipment by line
   */
  static async getByLine(req, res) {
    try {
      const { lineId } = req.params;
      const equipment = await Equipment.findByLine(lineId);
      res.status(200).json({ equipment });
    } catch (error) {
      console.error('Get equipment by line error:', error);
      res.status(500).json({ error: 'Error fetching equipment' });
    }
  }

  /**
   * Update equipment
   */
  static async update(req, res) {
    try {
      const { id } = req.params;
      const { name, description, line_id, status, serial_number } = req.body;

      // Check if equipment exists
      const existingEquipment = await Equipment.findById(id);
      if (!existingEquipment) {
        return res.status(404).json({ error: 'Equipment not found' });
      }

      // Update equipment
      const updatedEquipment = await Equipment.update(id, { name, description, line_id, status, serial_number });

      res.status(200).json({
        message: 'Equipment updated successfully',
        equipment: updatedEquipment
      });
    } catch (error) {
      console.error('Update equipment error:', error);
      res.status(500).json({ error: 'Error updating equipment' });
    }
  }

  /**
   * Delete equipment
   */
  static async delete(req, res) {
    try {
      const { id } = req.params;

      // Check if equipment exists
      const existingEquipment = await Equipment.findById(id);
      if (!existingEquipment) {
        return res.status(404).json({ error: 'Equipment not found' });
      }

      // Delete equipment
      await Equipment.delete(id);

      res.status(200).json({ message: 'Equipment deleted successfully' });
    } catch (error) {
      console.error('Delete equipment error:', error);
      res.status(500).json({ error: 'Error deleting equipment' });
    }
  }
}

module.exports = EquipmentController;
