import {Usuario} from "./Usuario";
import {Turma} from "./Turma";
export class Aluno extends Usuario {

    constructor(login: string, nome: string, senha: string){
        super(login, nome, senha);
    }
    criaPergunta(turma: Turma, pergunta: string){

    }
}
