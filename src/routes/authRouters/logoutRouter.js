import express from 'express';

const logoutRouter = express.Router();

logoutRouter.get('/', (req, res) => res
  .clearCookie('accessToken')
  .clearCookie('refreshToken')
  .redirect('/'));

export default logoutRouter;
