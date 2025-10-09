const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { testConnection } = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const lineRoutes = require('./routes/lineRoutes');
const equipmentRoutes = require('./routes/equipmentRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'CELC Backend API',
    version: '1.0.0',
    endpoints: {
      auth: '/api/auth',
      users: '/api/users',
      lines: '/api/lines',
      equipment: '/api/equipment'
    }
  });
});

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/lines', lineRoutes);
app.use('/api/equipment', equipmentRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
const startServer = async () => {
  try {
    // Test database connection
    await testConnection();
    
    app.listen(PORT, () => {
      console.log(`\n🚀 Server is running on port ${PORT}`);
      console.log(`📍 API URL: http://localhost:${PORT}`);
      console.log(`\n📚 Available endpoints:`);
      console.log(`   POST   /api/auth/register`);
      console.log(`   POST   /api/auth/login`);
      console.log(`   GET    /api/users`);
      console.log(`   GET    /api/users/:id`);
      console.log(`   PUT    /api/users/:id`);
      console.log(`   DELETE /api/users/:id`);
      console.log(`   POST   /api/lines`);
      console.log(`   GET    /api/lines`);
      console.log(`   GET    /api/lines/:id`);
      console.log(`   PUT    /api/lines/:id`);
      console.log(`   DELETE /api/lines/:id`);
      console.log(`   POST   /api/equipment`);
      console.log(`   GET    /api/equipment`);
      console.log(`   GET    /api/equipment/:id`);
      console.log(`   GET    /api/equipment/line/:lineId`);
      console.log(`   PUT    /api/equipment/:id`);
      console.log(`   DELETE /api/equipment/:id\n`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
