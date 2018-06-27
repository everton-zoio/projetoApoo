import { Router, Request, Response, NextFunction} from "express";

export class UserRouter{
    public router: Router
    constructor(){
        this.router = Router();
        this.init();
    }
    public get(req: Request, res: Response, next: NextFunction){
        res.send("User");
    }

    init(){
        this.router.get("/", this.get);
    }
}
const userRouter = new UserRouter();
userRouter.init();
export default userRouter.router;