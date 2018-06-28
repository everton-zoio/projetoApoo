"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db = require("../database/data");
class UserRouter {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    getIndex(req, res, next) {
        if (req.session.usuario) {
            res.render("index", {
                usuario: req.session.nome,
                chatG: []
            });
        }
        else {
            res.redirect('/login');
        }
    }
    getLogin(req, res, next) {
        if (req.session.usuario) {
            res.redirect('/');
        }
        else {
            res.render("login", {
                erro: ""
            });
        }
    }
    postLogin(req, res, next) {
        var body = req.body;
        var sql = "SELECT * FROM Usuario WHERE RA=? AND PASSWORD=?";
        db.query(sql, [body.ra, body.password], function (err, result) {
            if (err) {
                console.log(err);
                return;
            }
            if (result.length) {
                req.session.usuario = result[0].RA;
                req.session.nome = result[0].Nome;
                res.redirect("/");
                return;
            }
            res.render("login", { erro: "Usuário não encontrado" });
        });
    }
    init() {
        this.router.get('/', this.getIndex);
        this.router.get('/index', this.getIndex);
        this.router.get('/login', this.getLogin);
        this.router.post('/login', this.postLogin);
    }
}
exports.UserRouter = UserRouter;
const userRouter = new UserRouter();
userRouter.init();
exports.default = userRouter;
