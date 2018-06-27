export class UsuarioController{

    private _inputLogin: string;
    private _inputNome: string;
    private _inputSenha: string;

    constructor(login: string, nome: string, senha: string){
        this._inputLogin = login;
        this._inputNome = nome;
        this._inputSenha = senha;
    }
    
}