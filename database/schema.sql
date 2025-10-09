-- CELC Database Schema
-- Create database
CREATE DATABASE IF NOT EXISTS celc_db;
USE celc_db;

-- Table: usuarios (Users)
CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role ENUM('admin', 'user') DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table: lineas (Lines)
CREATE TABLE IF NOT EXISTS lineas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  description TEXT,
  status ENUM('active', 'inactive', 'maintenance') DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table: equipos (Equipment)
CREATE TABLE IF NOT EXISTS equipos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  description TEXT,
  line_id INT,
  status ENUM('active', 'inactive', 'maintenance', 'repair') DEFAULT 'active',
  serial_number VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (line_id) REFERENCES lineas(id) ON DELETE SET NULL
);

-- Indexes for better performance
CREATE INDEX idx_usuarios_email ON usuarios(email);
CREATE INDEX idx_lineas_status ON lineas(status);
CREATE INDEX idx_equipos_line_id ON equipos(line_id);
CREATE INDEX idx_equipos_status ON equipos(status);

-- Insert sample data (optional)
-- Admin user: admin@celc.com / admin123
INSERT INTO usuarios (username, email, password, role) VALUES 
('Admin User', 'admin@celc.com', '$2a$10$WvGzXe4K5xT.4YcTxk3V4OqYPQOzK3lVdZXHYqD0uZvQhLx5wLCVm', 'admin');

-- Sample lines
INSERT INTO lineas (name, description, status) VALUES 
('Línea de Producción 1', 'Primera línea de producción', 'active'),
('Línea de Producción 2', 'Segunda línea de producción', 'active'),
('Línea de Ensamblaje', 'Línea de ensamblaje principal', 'active');

-- Sample equipment
INSERT INTO equipos (name, description, line_id, status, serial_number) VALUES 
('Máquina Cortadora', 'Máquina de corte industrial', 1, 'active', 'MC-001'),
('Robot Ensamblador', 'Robot de ensamblaje automático', 3, 'active', 'RE-001'),
('Transportador', 'Banda transportadora principal', 2, 'active', 'TR-001');
