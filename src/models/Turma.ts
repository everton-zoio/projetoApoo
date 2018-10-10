import {Pergunta} from "./Pergunta";
import { Professor } from "./Professor";
import { Aluno } from "./Aluno";
export class Turma {
    private _nome: string;
    private _cod: string;
    private _professor: Professor;
    private _Alunos: Array<Aluno>;
    private _perguntas: Array<Pergunta>;

    constructor(nome:string, cod: string, prof: Professor){
        this._nome = nome;
        this._cod = cod;
        this._professor = prof;
    }
    
    public criarTurma(){
        
    }
}
