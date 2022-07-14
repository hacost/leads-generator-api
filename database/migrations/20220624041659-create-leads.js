'use strict';

const { LEAD_TABLE, LeadSchema } = require('../../schemas/lead-schema')

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(LEAD_TABLE, LeadSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(LEAD_TABLE)
  }
};
