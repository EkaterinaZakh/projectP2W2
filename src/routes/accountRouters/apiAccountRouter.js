import express from 'express';
import { Initiative } from '../../../db/models';

const apiAccountRouter = express.Router();

apiAccountRouter.route('/:id')
  .delete(async (req, res) => {
    try {
      await Initiative.destroy({ where: { id: req.params.id } });
      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  })

  // .patch(async (req, res) => {
  //   try {
  //     const { id } = req.params;
  //     const { name, description } = req.body;
  //     console.log(req.body);
  //     await Initiative.update({ name, description }, { where: { id } });
  //     const updateInitiative = await Initiative.findOne({ where: { id } });
  //     //   const updateInitiative = await Initiative.findByIdAndUpdate(id, { name, description });
  //     res.json(updateInitiative);
  //   } catch {
  //     res.statusCode(500).json('Ошибка');
  //   }
  // });

export default apiAccountRouter;
