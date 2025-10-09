const { pool } = require('../config/database');

/**
 * Equipment Model - Handles database operations for equipment (equipos)
 */
class Equipment {
  /**
   * Create new equipment
   * @param {Object} equipmentData - Equipment data
   * @returns {Object} Created equipment
   */
  static async create(equipmentData) {
    const { name, description, line_id, status = 'active', serial_number } = equipmentData;
    
    const [result] = await pool.execute(
      'INSERT INTO equipos (name, description, line_id, status, serial_number) VALUES (?, ?, ?, ?, ?)',
      [name, description, line_id, status, serial_number]
    );
    
    return { id: result.insertId, name, description, line_id, status, serial_number };
  }

  /**
   * Find equipment by ID
   * @param {number} id - Equipment ID
   * @returns {Object|null} Equipment object or null
   */
  static async findById(id) {
    const [rows] = await pool.execute(
      'SELECT e.*, l.name as line_name FROM equipos e LEFT JOIN lineas l ON e.line_id = l.id WHERE e.id = ?',
      [id]
    );
    return rows[0] || null;
  }

  /**
   * Get all equipment
   * @returns {Array} Array of equipment
   */
  static async findAll() {
    const [rows] = await pool.execute(
      'SELECT e.*, l.name as line_name FROM equipos e LEFT JOIN lineas l ON e.line_id = l.id ORDER BY e.created_at DESC'
    );
    return rows;
  }

  /**
   * Get equipment by line
   * @param {number} lineId - Line ID
   * @returns {Array} Array of equipment
   */
  static async findByLine(lineId) {
    const [rows] = await pool.execute(
      'SELECT * FROM equipos WHERE line_id = ? ORDER BY created_at DESC',
      [lineId]
    );
    return rows;
  }

  /**
   * Update equipment
   * @param {number} id - Equipment ID
   * @param {Object} equipmentData - Updated equipment data
   * @returns {Object} Updated equipment
   */
  static async update(id, equipmentData) {
    const { name, description, line_id, status, serial_number } = equipmentData;
    
    await pool.execute(
      'UPDATE equipos SET name = ?, description = ?, line_id = ?, status = ?, serial_number = ? WHERE id = ?',
      [name, description, line_id, status, serial_number, id]
    );
    
    return await this.findById(id);
  }

  /**
   * Delete equipment
   * @param {number} id - Equipment ID
   * @returns {boolean} True if deleted
   */
  static async delete(id) {
    const [result] = await pool.execute(
      'DELETE FROM equipos WHERE id = ?',
      [id]
    );
    return result.affectedRows > 0;
  }
}

module.exports = Equipment;
