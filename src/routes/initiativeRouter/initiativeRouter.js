import express from 'express';
import { Initiative, User } from '../../../db/models';

const initiativeRouter = express.Router();

initiativeRouter.get('/initiatives/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const initiative = await Initiative.findOne({ where: { id } });
    const { userId } = initiative;

    const userName = await User.findOne({ where: { id: userId } });

    const allInitiativeUser = await Initiative.findAll({ where: { userId: userName.id } });

    const initState = { initiative, userName, allInitiativeUser };
    res.render('InitiativePage', initState);
  } catch {
    res.status(500).redirect('/');
  }
});

export default initiativeRouter;
