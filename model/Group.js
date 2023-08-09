const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequilize.js')

const Group = sequelize.define('Group', {
  group_name: {
    type: DataTypes.STRING,
  },
  id_group_parent: {
    type: DataTypes.INTEGER,
  },
  create_date: {
    type: DataTypes.DATE,
  },
  id_organization: {
    type: DataTypes.INTEGER,
  },
  admin_flag: {
    type: DataTypes.BOOLEAN,
  },
  mobile_flag: {
    type: DataTypes.BOOLEAN,
  },
  id_group: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  level: {
    type: DataTypes.INTEGER,
  },
  id_default_home: {
    type: DataTypes.STRING(5),
  },
  createby: {
    type: DataTypes.STRING(50),
  },
  updateby: {
    type: DataTypes.STRING(50),
  },
  update_date: {
    type: DataTypes.DATE,
  },
  status: {
    type: DataTypes.BOOLEAN,
  },
  kd_ga: {
    type: DataTypes.STRING,
  },
  uuid_group: {
    type: DataTypes.UUID,
  },
}, {
  tableName: 'groups', 
  timestamps: false,
  schema: 'access_tools',
});

module.exports = Group;