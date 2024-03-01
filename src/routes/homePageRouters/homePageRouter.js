import express from 'express';
import { Initiative } from '../../../db/models';

const homePageRouter = express.Router();

homePageRouter.get('/', async (req, res) => {
  try {
    const allInitiatives = await Initiative.findAll({ order: [['updatedAt', 'DESC']] });
    res.render('HomePage', { allInitiatives });
  } catch (error) {
    console.error('Error fetching initiatives:', error);
    res.status(500).json({ error: 'Failed to fetch initiatives' });
  }
});

export default homePageRouter;
