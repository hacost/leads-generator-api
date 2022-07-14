const boom = require('@hapi/boom');
const { models } = require('../config/database-config');

class LeadsService {
  constructor(){
  }

  async findAll(){
    const res = await models.Lead.findAll({
      where: { active: true } 
    });
    return res;
  }

  async findById(id) {
    const model = await models.Lead.findByPk(id);
    if (!model) {
      throw boom.notFound('Lead not found');
    }
    return model;
  }

  async create(data){
    const newRecord = await models.Lead.create(data);
    return newRecord;
  }

  async update(id, changes) {
    const model = await this.findById(id);
    const res = await model.update(changes)
    return res;
  }
  
  async delete(id) {
    const model = await this.findById(id);
    await model.destroy();
    return { id };
  }

}

module.exports = LeadsService;