const Line = require('../models/Line');

/**
 * Line Controller - Handles line CRUD operations
 */
class LineController {
  /**
   * Create a new line
   */
  static async create(req, res) {
    try {
      const { name, description, status } = req.body;

      // Validate required fields
      if (!name) {
        return res.status(400).json({ error: 'Name is required' });
      }

      // Create line
      const line = await Line.create({ name, description, status });

      res.status(201).json({
        message: 'Line created successfully',
        line
      });
    } catch (error) {
      console.error('Create line error:', error);
      res.status(500).json({ error: 'Error creating line' });
    }
  }

  /**
   * Get all lines
   */
  static async getAll(req, res) {
    try {
      const lines = await Line.findAll();
      res.status(200).json({ lines });
    } catch (error) {
      console.error('Get lines error:', error);
      res.status(500).json({ error: 'Error fetching lines' });
    }
  }

  /**
   * Get line by ID
   */
  static async getById(req, res) {
    try {
      const { id } = req.params;
      const line = await Line.findById(id);

      if (!line) {
        return res.status(404).json({ error: 'Line not found' });
      }

      res.status(200).json({ line });
    } catch (error) {
      console.error('Get line error:', error);
      res.status(500).json({ error: 'Error fetching line' });
    }
  }

  /**
   * Update line
   */
  static async update(req, res) {
    try {
      const { id } = req.params;
      const { name, description, status } = req.body;

      // Check if line exists
      const existingLine = await Line.findById(id);
      if (!existingLine) {
        return res.status(404).json({ error: 'Line not found' });
      }

      // Update line
      const updatedLine = await Line.update(id, { name, description, status });

      res.status(200).json({
        message: 'Line updated successfully',
        line: updatedLine
      });
    } catch (error) {
      console.error('Update line error:', error);
      res.status(500).json({ error: 'Error updating line' });
    }
  }

  /**
   * Delete line
   */
  static async delete(req, res) {
    try {
      const { id } = req.params;

      // Check if line exists
      const existingLine = await Line.findById(id);
      if (!existingLine) {
        return res.status(404).json({ error: 'Line not found' });
      }

      // Delete line
      await Line.delete(id);

      res.status(200).json({ message: 'Line deleted successfully' });
    } catch (error) {
      console.error('Delete line error:', error);
      res.status(500).json({ error: 'Error deleting line' });
    }
  }
}

module.exports = LineController;
