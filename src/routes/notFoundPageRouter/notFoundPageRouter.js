import express from 'express';

const notFoundPageRouter = express.Router();

notFoundPageRouter.get('*', (req, res) => {
  res.status(404).render('NotFoundPage');
});

export default notFoundPageRouter;