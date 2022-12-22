'use strict';

const { Op } = require('sequelize');

class ModelInterface{
  constructor(model){
    this.model = model;
  }

  async create(json){
    try {
      let record = await this.model.create(json);
      return record;
    } catch (e) {
      console.error(e);
      return e;
    }
  }

  async read(id = null){
    try {
      if(id){
        return this.model.findOne({ where: { id }});
      } else {
        return this.model.findAll();
      }
    } catch (e) {
      console.error(e);
      return e;
    }
  }

  async readSome(id){
    try{
      return await this.model.findAll({ where: { UserId: id} });
    } catch (e) {
      console.error(e);
      return e;
    }
  }

  async update(id, body){
    try {
      await this.model.update(body, { where: { id } });
      let record = await this.model.findOne({ where: { id }});
      return record;
    } catch (e) {
      console.error(e);
      return e;
    }
  }

  async destroy(id){
    try {
      return await this.model.destroy({ where: { id } })
    } catch (e) {
      console.error(e);
      return e;
    }
  }

  async destroySaved(UserId, jobId){
    try{
      console.log(UserId, jobId);
      return await this.model.destroy({ where: {
        [Op.and]: [UserId, jobId]
      } });
    } catch (e) {
      console.error(e);
      return e;
    }
  }

}

module.exports = ModelInterface;