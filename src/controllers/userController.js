const User = require('../models/User');

/**
 * User Controller - Handles user CRUD operations
 */
class UserController {
  /**
   * Get all users
   */
  static async getAll(req, res) {
    try {
      const users = await User.findAll();
      res.status(200).json({ users });
    } catch (error) {
      console.error('Get users error:', error);
      res.status(500).json({ error: 'Error fetching users' });
    }
  }

  /**
   * Get user by ID
   */
  static async getById(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findById(id);

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      res.status(200).json({ user });
    } catch (error) {
      console.error('Get user error:', error);
      res.status(500).json({ error: 'Error fetching user' });
    }
  }

  /**
   * Update user
   */
  static async update(req, res) {
    try {
      const { id } = req.params;
      const { username, email, role } = req.body;

      // Check if user exists
      const existingUser = await User.findById(id);
      if (!existingUser) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Update user
      const updatedUser = await User.update(id, { username, email, role });

      res.status(200).json({
        message: 'User updated successfully',
        user: updatedUser
      });
    } catch (error) {
      console.error('Update user error:', error);
      res.status(500).json({ error: 'Error updating user' });
    }
  }

  /**
   * Delete user
   */
  static async delete(req, res) {
    try {
      const { id } = req.params;

      // Check if user exists
      const existingUser = await User.findById(id);
      if (!existingUser) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Delete user
      await User.delete(id);

      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error('Delete user error:', error);
      res.status(500).json({ error: 'Error deleting user' });
    }
  }
}

module.exports = UserController;
