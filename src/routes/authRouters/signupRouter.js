import express from 'express';
import { District } from "../../../db/models"


const signupRouter = express.Router();


signupRouter.get('/', async (req, res) => {
  const { redirect } = req.query
  const districts = await District.findAll()
  console.log(districts);
  const initState = { districts, redirect };
  res.render('SignupPage', initState);
});

export default signupRouter;
