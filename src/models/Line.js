const { pool } = require('../config/database');

/**
 * Line Model - Handles database operations for lines (líneas)
 */
class Line {
  /**
   * Create a new line
   * @param {Object} lineData - Line data
   * @returns {Object} Created line
   */
  static async create(lineData) {
    const { name, description, status = 'active' } = lineData;
    
    const [result] = await pool.execute(
      'INSERT INTO lineas (name, description, status) VALUES (?, ?, ?)',
      [name, description, status]
    );
    
    return { id: result.insertId, name, description, status };
  }

  /**
   * Find line by ID
   * @param {number} id - Line ID
   * @returns {Object|null} Line object or null
   */
  static async findById(id) {
    const [rows] = await pool.execute(
      'SELECT * FROM lineas WHERE id = ?',
      [id]
    );
    return rows[0] || null;
  }

  /**
   * Get all lines
   * @returns {Array} Array of lines
   */
  static async findAll() {
    const [rows] = await pool.execute(
      'SELECT * FROM lineas ORDER BY created_at DESC'
    );
    return rows;
  }

  /**
   * Update line
   * @param {number} id - Line ID
   * @param {Object} lineData - Updated line data
   * @returns {Object} Updated line
   */
  static async update(id, lineData) {
    const { name, description, status } = lineData;
    
    await pool.execute(
      'UPDATE lineas SET name = ?, description = ?, status = ? WHERE id = ?',
      [name, description, status, id]
    );
    
    return await this.findById(id);
  }

  /**
   * Delete line
   * @param {number} id - Line ID
   * @returns {boolean} True if deleted
   */
  static async delete(id) {
    const [result] = await pool.execute(
      'DELETE FROM lineas WHERE id = ?',
      [id]
    );
    return result.affectedRows > 0;
  }
}

module.exports = Line;
