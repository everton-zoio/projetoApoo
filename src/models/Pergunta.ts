import {Aluno} from "./Aluno";
export class Pergunta {
    private _descricao: string;
    private _autor: Aluno;

    constructor(descricao: string, autor: Aluno){
        this._descricao = descricao;
        this._autor = autor;
    }
    public getDescricao(){
        return this._descricao;
    }
    public getAutor(){
        return this._autor;
    }
    public setDescricao(descricao: string){
        this._descricao = op1;
    }
    public setAutor(aluno: Aluno){
        this._autor = aluno;
    }
}
