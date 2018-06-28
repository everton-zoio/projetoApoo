import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as session from 'express-session';

import personRouter from "./routes/UserRouter";
// Criando as configurações para o ExpressJS

const App = express();
App.set("views", path.join(__dirname, "../views"));
App.set("view engine", "ejs");
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: false }));
App.use(session({
    resave: true,
    saveUninitialized: true,
    secret: "APOO",
    cookie: { maxAge: new Date(Date.now() + (60 * 1000 * 15))}
}));
App.use(
    express.static(path.join(__dirname, "../public"))
);
App.use('/', personRouter.router);

export default App;