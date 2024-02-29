import express from 'express';
import { Initiative } from '../../../db/models';

const accountRouter = express.Router();

accountRouter.get('/', async (req, res) => {
  try {
    const allInitiatives = await Initiative.findAll();
    res.render('AccountPage', { allInitiatives });
  } catch (error) {
    console.error('Error fetching initiatives:', error);
    res.status(500).json({ error: 'Failed to fetch initiatives' });
  }
});

export default accountRouter;
