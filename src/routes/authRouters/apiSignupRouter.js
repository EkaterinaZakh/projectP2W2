import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../../db/models';
import generateTokens from '../../utils/generateTokens';
import cookiesConfig from '../../config/cookiesConfig';


const apiSignupRouter = express.Router();

// apiSignupRouter.get('/api/auth/signup', (req, res) => {
//   res.json({ hello: 'world' });
// });


apiSignupRouter.post('/', async (req, res) => {
  const { email, username, password, districtId } = req.body;
  if (!email || !username || !password || !districtId) {
    return res.status(400).json({
      message: 'Заполните все поля',
    });
  }

  const [user, created] = await User.findOrCreate({
    where: { email },
    defaults: {
      username,
      password: await bcrypt.hash(password, 10),
      districtId
    },
  });
  if (!created) return res.status(403).json({ message: 'Пользователь уже существует' });

  const plainUser = user.get();
  delete plainUser.password;
  const { accessToken, refreshToken } = generateTokens({ user: plainUser });

  res.cookie('accessToken', accessToken, cookiesConfig.access)
    .cookie('refreshToken', refreshToken, cookiesConfig.refresh)
    .sendStatus(200);
});



export default apiSignupRouter;
