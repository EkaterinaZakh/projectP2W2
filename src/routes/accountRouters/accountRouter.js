import express from 'express';
import { Initiative } from '../../../db/models';

const accountRouter = express.Router();

accountRouter.get('/', async (req, res) => {
  try {
    // const { id } = req.params;
    // const userId = id;
    // const userInitiatives = await Initiative.findAll({ where: { userId } });
    const userInitiatives = await Initiative.findAll({
      where: {
        userId: res.locals.user.id,
      },
    });
    console.log({ userInitiatives, user: res.locals.user });

    res.render('AccountPage', { userInitiatives });
  } catch (error) {
    console.error('Error fetching initiatives:', error);
    res.status(500).json({ error: 'Failed to fetch initiatives' });
  }
});

export default accountRouter;
