const { Lead, LeadSchema } = require('../schemas/lead-schema');
function modelsConfig(sequelize) {

  Lead.init(LeadSchema, Lead.config(sequelize));

  //Run associates 

}

module.exports = modelsConfig;