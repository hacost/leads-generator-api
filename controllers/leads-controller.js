const leadsModel = require('../models/leads-model');

  const findAll = async (req, res, next) => {
    try {
      const data = await leadsModel.findAll();
      res.json(data);
    } catch (error) {
      next(error)
    }
  };

  const findById = async (req, res, next) => {
    try {
      const { id } = req.params;
      res.json(await leadsModel.findById(id));
    } catch (error) {
      next(error);
    }
  }
  
  const create = async (req, res, next) => {
   try {
     const body = req.body;
     const newRecord = await leadsModel.create(body);
     res.status(201).json({
       message: 'Created record',
       newRecord
     })
   } catch (error) {
     next(error)
   }
  }
  
  const update = async (req, res, next) => {
   try {
     const { id } = req.params;
     const changes = req.body;
     const record = await leadsModel.update(id, changes);
     res.json({
       message: 'Update record',
       record
     })
   } catch (error) {
     next(error);
   }
  }
  
  const delete_ = async (req, res, next) => {
   try {
     const { id } = req.params;
     await leadsModel.delete(id);
     res.json({
       message: 'Delete record',
       id
     }) 
   } catch (error) {
     next(error);
   }
  }


module.exports = {findAll, findById, create, update, delete_};
