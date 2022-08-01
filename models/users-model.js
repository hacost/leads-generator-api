const boom = require('@hapi/boom');
const { models } = require('../config/database-config');
const { hidePassword } = require('../utils/helper-util');
class UsersService {
  constructor(){
  }

  async findAll(){
    const res = await models.User.findAll();
    //hidePassword(res.User);
    return res;
  }

  async findById(id) {
    const model = await models.User.findByPk(id);
    if (!model) {
      throw boom.notFound('User not found');
    }
    hidePassword(model);
    return model;
  }

  async findByEmail(email) {
    const res = await models.User.findOne({
      where: { email: email, isActive: true } 
    });
    return res;
  }
  
  async create(data){
    const newRecord = await models.User.create(data);
    hidePassword(newRecord);
    return newRecord;
  }

  async update(id, changes) {
    const model = await this.findById(id);
    const res = await model.update(changes)
    hidePassword(res);
    return res;
  }
  
  async delete(id) {
    const model = await this.findById(id);
    await model.destroy();
    return { id };
  }

}

module.exports = new UsersService();