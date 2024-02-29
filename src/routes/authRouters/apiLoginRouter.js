import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../../db/models';
import generateTokens from '../../utils/generateTokens';
import cookiesConfig from '../../config/cookiesConfig';

const apiLoginRouter = express.Router();


apiLoginRouter.post('/', async (req, res) => {
  const { email, password } = req.body;

  if (!(email && password)) {
    return res.status(400).json({ message: 'Заполните все поля' });
  }

  const user = await User.findOne({ where: { email } });

  if (!user) return res.status(403).json({ message: 'Пользователь не найден' });

  const correctPass = await bcrypt.compare(password, user.password);

  if (!correctPass) {
    return res.status(401).json({ message: 'Неверный пароль' });
  }

  const plainUser = user.get();
  delete plainUser.password;

  const { accessToken, refreshToken } = generateTokens({ user: plainUser });
  console.log(accessToken, refreshToken);

  res
    .cookie('accessToken', accessToken, cookiesConfig.access)
    .cookie('refreshToken', refreshToken, cookiesConfig.refresh)
    .sendStatus(200);
});


export default apiLoginRouter;
