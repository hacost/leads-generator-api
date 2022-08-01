const { Lead, LeadSchema } = require('../schemas/lead-schema');
const { User, UserSchema } = require('../schemas/user-schema');
function modelsConfig(sequelize) {

  Lead.init(LeadSchema, Lead.config(sequelize));
  User.init(UserSchema, User.config(sequelize));
  //Run associates 

}

module.exports = modelsConfig;