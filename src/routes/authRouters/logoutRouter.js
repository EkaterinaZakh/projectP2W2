import express from 'express';

const logoutRouter = express.Router();


logoutRouter.get('/', (req, res) => {
  res.clearCookie('accessToken').clearCookie('refreshToken').sendStatus(200);
});

export default logoutRouter;
