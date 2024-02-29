import express from 'express';
import { Initiative } from '../../../db/models';

const apiHomePageRouter = express.Router();

apiHomePageRouter.get('/', async (req, res) => {
  try {
    const allInitiatives = await Initiative.findAll();
    res.render('HomePage', { allInitiatives });
  } catch (error) {
    console.error('Error fetching initiatives:', error);
    res.status(500).json({ error: 'Failed to fetch initiatives' });
  }
});

export default apiHomePageRouter;
