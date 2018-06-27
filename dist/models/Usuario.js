"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Usuario {
    constructor(login, nome, senha) {
        this._login = login;
        this._nome = nome;
        this._senha = senha;
    }
    setLogin(login) {
        this._login = login;
    }
    getLogin() {
        return this._login;
    }
    setNome(nome) {
        this._nome = nome;
    }
    getNome() {
        return this._nome;
    }
    setSenha(senha) {
        this._senha = senha;
    }
    getSenha() {
        return this._senha;
    }
}
exports.Usuario = Usuario;
