'use strict';

const { USER_TABLE, UserSchema } = require('../../schemas/user-schema')

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(USER_TABLE, UserSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(USER_TABLE)
  }
};
