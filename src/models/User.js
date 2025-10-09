const { pool } = require('../config/database');
const bcrypt = require('bcryptjs');

/**
 * User Model - Handles database operations for users
 */
class User {
  /**
   * Create a new user
   * @param {Object} userData - User data
   * @returns {Object} Created user
   */
  static async create(userData) {
    const { username, email, password, role = 'user' } = userData;
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const [result] = await pool.execute(
      'INSERT INTO usuarios (username, email, password, role) VALUES (?, ?, ?, ?)',
      [username, email, hashedPassword, role]
    );
    
    return { id: result.insertId, username, email, role };
  }

  /**
   * Find user by email
   * @param {string} email - User email
   * @returns {Object|null} User object or null
   */
  static async findByEmail(email) {
    const [rows] = await pool.execute(
      'SELECT * FROM usuarios WHERE email = ?',
      [email]
    );
    return rows[0] || null;
  }

  /**
   * Find user by ID
   * @param {number} id - User ID
   * @returns {Object|null} User object or null
   */
  static async findById(id) {
    const [rows] = await pool.execute(
      'SELECT id, username, email, role, created_at, updated_at FROM usuarios WHERE id = ?',
      [id]
    );
    return rows[0] || null;
  }

  /**
   * Get all users
   * @returns {Array} Array of users
   */
  static async findAll() {
    const [rows] = await pool.execute(
      'SELECT id, username, email, role, created_at, updated_at FROM usuarios'
    );
    return rows;
  }

  /**
   * Update user
   * @param {number} id - User ID
   * @param {Object} userData - Updated user data
   * @returns {Object} Updated user
   */
  static async update(id, userData) {
    const { username, email, role } = userData;
    
    await pool.execute(
      'UPDATE usuarios SET username = ?, email = ?, role = ? WHERE id = ?',
      [username, email, role, id]
    );
    
    return await this.findById(id);
  }

  /**
   * Delete user
   * @param {number} id - User ID
   * @returns {boolean} True if deleted
   */
  static async delete(id) {
    const [result] = await pool.execute(
      'DELETE FROM usuarios WHERE id = ?',
      [id]
    );
    return result.affectedRows > 0;
  }

  /**
   * Verify password
   * @param {string} password - Plain text password
   * @param {string} hashedPassword - Hashed password
   * @returns {boolean} True if password matches
   */
  static async verifyPassword(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
  }
}

module.exports = User;
