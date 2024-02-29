import express from 'express';
import { District } from '../../../db/models';

const addInitiativeRouter = express.Router();

addInitiativeRouter.get('/', async (req, res) => {
  const districtAll = await District.findAll();
  const initState = { districtAll };
  res.render('AddInitiative', initState);
});

export default addInitiativeRouter;
