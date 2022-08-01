const { Model, DataTypes} = require('sequelize');
const { hashPassword } = require('../utils/helper-util');
const USER_TABLE = 'users';

// structure in database
const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  isActive: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field: 'is_active',
    defaultValue: true
  },
  lastLogin: {
    type: DataTypes.DATE,
    field: 'last_login',
  },
  createAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Date.now()
  }
}

// user model
class User extends Model {
  /*   static associate(models){
    relations with Role table
  } */
  static config(sequelize){
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false,
      hooks: {
        beforeCreate: async (user) => {
          user.password = await hashPassword(user.password);
        }
      }
    }
  }
}

module.exports = { User, UserSchema, USER_TABLE };