//const { Sequelize } = require('sequelize');
//require('dotenv').config();  // Load environment variables from .env file
import Sequelize from 'sequelize';

import "dotenv/config";
// Create a new Sequelize instance and configure the connection
const sequelize = new Sequelize(
  process.env.DB_NAME, // Database name
  process.env.DB_USER, // Database user
  process.env.DB_PASSWORD, // Database password
  {
    host: process.env.DB_HOST, // Database host (e.g., localhost)
    dialect: 'mysql', // Use MySQL as the dialect
    port: process.env.DB_PORT, // Port (default is 3306 for MySQL)
  }
);
export default sequelize;