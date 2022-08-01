const usersModel = require('../models/users-model');

  const findAll = async (req, res, next) => {
    try {
      const data = await usersModel.findAll();
      res.json(data);
    } catch (error) {
      next(error)
    }
  };

  const findById = async (req, res, next) => {
    try {
      const { id } = req.params;
      res.json(await usersModel.findById(id));
    } catch (error) {
      next(error);
    }
  }
  
  const create = async (req, res, next) => {
   try {
     const body = req.body;
     const newRecord = await usersModel.create(body);
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
     const record = await usersModel.update(id, changes);
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
     await usersModel.delete(id);
     res.json({
       message: 'Delete record',
       id
     }) 
   } catch (error) {
     next(error);
   }
  }


module.exports = {findAll, findById, create, update, delete_};
