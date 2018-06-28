"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const UserRouter_1 = require("./routes/UserRouter");
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
    cookie: { maxAge: new Date(Date.now() + (60 * 1000 * 15)) }
}));
App.use(express.static(path.join(__dirname, "../public")));
App.use('/', UserRouter_1.default.router);
exports.default = App;
