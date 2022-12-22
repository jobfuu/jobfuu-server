'use strict';

const express = require('express');
const modules = require('../models');

const router = express.Router();

router.param('model', (req, res, next) => {
  const modelName = req.params.model;

  if(modules[modelName]){
    req.model = modules[modelName];
    next();
  } else {
    next('invalid model');
  }
});

// ************* user routes *****************
router.get('/:model/collection/:id', handleGetCollection);
router.delete('/:model/collection/:id', handleDeleteCollection);
router.get('/:model', handleGetAll);
router.post('/:model', handleCreate);
router.get('/:model/:id', handleGetOne);

// ************* Admin Routes ****************
router.put('/:model/:id', handleUpdate);
router.delete('/:model/:id', handleDelete);


async function handleGetAll(req, res){
  let allRecords = await req.model.read();
  res.status(200).send(allRecords);
}

async function handleGetOne(req, res){
  let records = await req.model.read(req.params.id);
  res.status(200).send(records);
}

async function handleCreate(req, res){
  console.log(req.model);
  let record = await req.model.create(req.body);
  res.status(200).send(record);
}

async function handleUpdate(req, res){
  let records = await req.model.update(req.params.id, req.body);
  res.status(200).send(records);
}

async function handleDelete(req, res){
  await req.model.destroy(req.params.id);
  res.sendStatus(200).send('Successfully deleted record.');
}

async function handleGetCollection(req, res){
  let { id } = req.params;
  let records = await req.model.readSome(id);
  res.status(200).send(records);
}

async function handleDeleteCollection(req, res){
  let { UserId, jobId } = req.body;
  await req.model.destroySaved(UserId, jobId);
  res.status(200).send('Record successfully deleted from collection');
}

module.exports = router;