export class Usuario {
    private _login: string;
    private _nome: string;
    private _senha: string;

    public constructor(login: string, nome: string, senha: string){
        this._login = login;
        this._nome = nome;
        this._senha = senha;
    }

    public setLogin(login: string){
        this._login = login;
    }

    public getLogin(){
        return this._login;
    }

    public setNome(nome: string){
        this._nome = nome;
    }

    public getNome(){
        return this._nome;
    }

    public setSenha(senha: string){
        this._senha = senha;
    }

    public getSenha(){
        return this._senha;
    }
}
