import express from 'express';

const loginRouter = express.Router();

loginRouter.get('/', (req, res) => {
  // const initState = { hello: 'world' };
  res.render('LoginPage');
});

export default loginRouter;
