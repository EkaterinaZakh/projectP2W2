/* eslint-disable consistent-return */
import express from 'express';
import { Initiative } from '../../../db/models';

const apiAddInitiativeRouter = express.Router();

apiAddInitiativeRouter.post('/', async (req, res) => {
  try {
    const {
      name, description, districtId,
    } = req.body;

    if (!name || !description || !districtId) {
      return res.status(400).json({ message: 'Все поля должны быть заполнены' });
    }

    await Initiative.create({
      name,
      description,
      districtId,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Ошибка сервера');
  }
});

export default apiAddInitiativeRouter;
