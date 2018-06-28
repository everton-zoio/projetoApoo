"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Usuario_1 = require("./Usuario");
class Aluno extends Usuario_1.Usuario {
    constructor(login, nome, senha) {
        super(login, nome, senha);
    }
    criaPergunta(turma, pergunta) {
    }
}
exports.Aluno = Aluno;
