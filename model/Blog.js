const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequilize.js')

const Blog = sequelize.define('Blog', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
      type: DataTypes.TEXT,
      allowNull: false,
  },
}, {
  tableName: 'tb_blogs', 
  timestamps: false,
});

module.exports = Blog;