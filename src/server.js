import express from 'express';
import morgan from 'morgan';
import path from 'path';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import jsxRender from './utils/jsxRender';
import resLocals from './middlewares/resLocals';
import initiativeRouter from './routes/initiativeRouter/initiativeRouter';
import apiAddInitiativeRouter from './routes/addInitiativeRouter/apiAddInitiativeRouter';
import addInitiativeRouter from './routes/addInitiativeRouter/addInitiativeRouter';
import signupRouter from './routes/authRouters/signupRouter';
import loginRouter from './routes/authRouters/loginRouter';
import apiSignupRouter from './routes/authRouters/apiSignupRouter';
import apiLoginRouter from './routes/authRouters/apiLoginRouter';
import homePageRouter from './routes/homePageRouters/homePageRouter';
import accountRouter from './routes/accountRouters/accountRouter';
import apiHomePageRouter from './routes/homePageRouters/apihomePageRouter';
import logoutRouter from './routes/authRouters/logoutRouter';
import apiAccountRouter from './routes/accountRouters/apiAccountRouter';
import editRouter from './routes/editRouter/editRouter';
import apiEditRouter from './routes/editRouter/apiEditRouter';
import notFoundPageRouter from './routes/notFoundPageRouter /notFoundPageRouter';
// import notFoundPageRouter from './routes/notFoundPageRouter/notFoundPageRouter';


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

app.use('/auth/signup', signupRouter);
app.use('/auth/login', loginRouter);
app.use('/api/auth/signup', apiSignupRouter);
app.use('/api/auth/login', apiLoginRouter);
app.use('/', initiativeRouter);
app.use('/addinitiative', addInitiativeRouter);
app.use('/api/addinitiative', apiAddInitiativeRouter);
app.use('/auth/login', loginRouter);
app.use('/auth/logout', logoutRouter);
app.use('/', homePageRouter);
app.use('/account', accountRouter);
app.use('/initiatives', apiHomePageRouter)
app.use('/account/edit', editRouter);
app.use('/api/account', apiAccountRouter);
app.use('/api/account/edit', apiEditRouter);
app.use('*', notFoundPageRouter);

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
