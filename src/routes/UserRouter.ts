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
        if(req.session.usuario){
            res.render("index",{
                usuario: req.session.nome,
                chatG: [],
                turmas: []
            });
        }
        else{
            res.redirect('/login');
        }
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
        var body = req.body;
        var sql = "SELECT * FROM Usuario WHERE RA=? AND PASSWORD=?";
        db.query(sql,[body.ra,body.password], function(err: QueryError, result: RowDataPacket[]){
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
    init() {
        this.router.get('/', this.getIndex);
        this.router.get('/index', this.getIndex);
        this.router.get('/login', this.getLogin);
        this.router.post('/login', this.postLogin);
    }
}
const userRouter = new UserRouter();
userRouter.init();
export default userRouter;