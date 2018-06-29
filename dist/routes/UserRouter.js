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
        if (req.session.usuario == null) {
            res.redirect("/login");
            return;
        }
        var sql = "SELECT * FROM `chat Global` C, Usuario U WHERE U.RA = C.UsuarioId ORDER BY data DESC;";
        db.query(sql, (err, rows) => {
            res.render("index", {
                usuario: req.session.nome,
                login: req.session.usuario,
                chatG: rows
            });
        });
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
        let body = req.body;
        let sql = "SELECT * FROM Usuario WHERE RA=? AND PASSWORD=?";
        db.query(sql, [body.ra, body.password], (err, result) => {
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
    getCadastro(req, res, next) {
        res.render('cadastro', {
            erro: null
        });
    }
    postCadastro(req, res, next) {
        let body = req.body;
        let sql = "INSERT INTO Usuario VALUES (' + body.ra + ', ' + body.password + ', ' + body.nome + ')";
        db.query(sql, (err, result) => {
            if (err) {
                console.log(err);
                res.render('cadastro', {
                    erro: true
                });
                return;
            }
            req.session.usuario = body.ra;
            req.session.nome = body.nome;
            res.redirect('/');
        });
    }
    getLogout(req, res, next) {
        if (req.session.usuario) {
            req.session.destroy((err) => {
                if (err)
                    console.log(err);
            });
            res.redirect('/login');
            return;
        }
        res.redirect('/login');
        return;
    }
    init() {
        this.router.get('/', this.getIndex);
        this.router.get('/index', this.getIndex);
        this.router.get('/login', this.getLogin);
        this.router.post('/login', this.postLogin);
        this.router.get('/Cadastro', this.getCadastro);
        this.router.post('/Cadastro', this.postCadastro);
        this.router.get('/sair', this.getLogout);
    }
}
exports.UserRouter = UserRouter;
const userRouter = new UserRouter();
userRouter.init();
exports.default = userRouter;
