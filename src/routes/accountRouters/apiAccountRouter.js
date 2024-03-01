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


export default apiAccountRouter;
