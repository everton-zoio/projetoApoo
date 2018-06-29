import { Router, Request, Response, NextFunction } from 'express';
import {QueryError, RowDataPacket} from 'mysql';
import * as db from "../database/data";

export class UserRouter {
    router: Router
    constructor() {
        this.router = Router();
        this.init();
    }
    public getIndex(req: Request, res: Response, next: NextFunction) {
        if(req.session.usuario == null){
            res.redirect("/login");
            return;
        }
        var sql = "SELECT * FROM `chat Global` C, Usuario U WHERE U.RA = C.UsuarioId ORDER BY data DESC;";
        db.query(sql, (err: QueryError, rows: RowDataPacket[])=>{
            res.render("index", {
              usuario: req.session.nome,
              login: req.session.usuario,
              chatG: rows
            });
        });
    }
    public getLogin(req: Request, res: Response, next: NextFunction){
        if(req.session.usuario){
            res.redirect('/');
        }
        else{
            res.render("login",{
                erro: ""
            });
        }
    }
    public postLogin(req: Request, res: Response, next: NextFunction){
        let body = req.body;
        let sql = "SELECT * FROM Usuario WHERE RA=? AND PASSWORD=?";
        db.query(sql,[body.ra,body.password], (err: QueryError, result: RowDataPacket[]) =>{
            if(err){
                console.log(err);
                return;
            }
            if(result.length){
                req.session.usuario = result[0].RA;
                req.session.nome = result[0].Nome;
                res.redirect("/");
                return;
            }
            res.render("login", {erro: "Usuário não encontrado"});
        });
    }
    public getCadastro(req: Request, res: Response, next: NextFunction){
        res.render('cadastro', {
            erro: null
        });
    }
    public postCadastro(req: Request, res: Response, next: NextFunction){
        let body = req.body;
        let sql = "INSERT INTO Usuario VALUES (' + body.ra + ', ' + body.password + ', ' + body.nome + ')";
        db.query(sql, (err: QueryError, result: RowDataPacket[])=>{
            if(err){
                console.log(err);
                res.render('cadastro', {
                    erro: true
                });
                return ;
            }
            req.session.usuario = body.ra;
            req.session.nome = body.nome;
            res.redirect('/');
        });
    }
    public getLogout(req: Request, res: Response, next: NextFunction){
        if(req.session.usuario){
            req.session.destroy((err: any)=>{
                if(err) console.log(err);
            });
            res.redirect('/login');
            return ;
        }
        res.redirect('/login');
        return ;
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
const userRouter = new UserRouter();
userRouter.init();
export default userRouter;