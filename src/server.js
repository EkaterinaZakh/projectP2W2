import express from 'express';
import morgan from 'morgan';
import path from 'path';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import jsxRender from './utils/jsxRender';
import resLocals from './middlewares/resLocals';
import signupRouter from './routes/authRouters/signupRouter';
import loginRouter from './routes/authRouters/loginRouter';
import apiSignupRouter from './routes/authRouters/apiSignupRouter';
import apiLoginRouter from './routes/authRouters/apiLoginRouter';
import homePageRouter from './routes/homePageRouters/homePageRouter';
import accountRouter from './routes/accountRouters/accountRouter';
import logoutRouter from './routes/authRouters/logoutRouter';

const PORT = process.env.PORT || 3000;
const app = express();

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components', 'pages'));

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(resLocals);



app.use('/', homePageRouter);
app.use("/auth/signup", signupRouter)
app.use("/auth/login", loginRouter)
app.use("/api/auth/signup", apiSignupRouter)
app.use("/api/auth/login", apiLoginRouter)
app.use("/api/auth/logout", logoutRouter)
app.use('/account', accountRouter);


app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
