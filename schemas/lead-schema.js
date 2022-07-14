const { Model, DataTypes } = require('sequelize');
const LEAD_TABLE = 'leads';

// structure in database
const LeadSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  businessName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'business_name'
  },
  url: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  fanCount: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'fan_count'
  },
  source: {
    allowNull: false,
    type: DataTypes.STRING
  },
  active: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  createAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Date.now()
  },
}

class Lead extends Model {
/*   static associate(models){
  }
*/
  static config(sequelize){
    return {
      sequelize,
      tableName: LEAD_TABLE,
      modelName: 'Lead',
      timestamps: false
    }
  }
}

module.exports = { Lead, LeadSchema, LEAD_TABLE };
