"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Usuario_1 = require("./Usuario");
const Turma_1 = require("./Turma");
class Professor extends Usuario_1.Usuario {
    criaTurma(nome, cod) {
        this._turmas.push(new Turma_1.Turma(nome, cod));
    }
}
exports.Professor = Professor;
