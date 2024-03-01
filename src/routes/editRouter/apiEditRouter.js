import express from 'express';
import { Initiative } from '../../../db/models';

const apiEditRouter = express.Router();

apiEditRouter.route('/:id')

  .patch(async (req, res) => {
    try {
      const { id } = req.params;
      const { name, description } = req.body;
      console.log(req.body);
      await Initiative.update({ name, description }, { where: { id } });
      const updateInitiative = await Initiative.findOne({ where: { id } });
      //   const updateInitiative = await Initiative.findByIdAndUpdate(id, { name, description });
      res.json(updateInitiative);
    } catch {
      res.statusCode(500).json('Ошибка');
    }
  });

export default apiEditRouter;
