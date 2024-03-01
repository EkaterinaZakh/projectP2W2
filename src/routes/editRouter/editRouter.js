import express from 'express';
import { Initiative } from '../../../db/models';

const editRouter = express.Router();

editRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const oneInitiative = await Initiative.findOne({ where: { id } });
  const initState = { oneInitiative };
  res.render('EditPage', initState);
});

export default editRouter;
