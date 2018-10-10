
export class Postagem {

    private conteudo: string;
    private comentario: Array<string>;
    private data: Date;

    constructor(cont: string, date: Date){
        this.conteudo = cont;
        this.data = date;
    }
    public getConteudo(){
        return this.conteudo;
    }
    public getComentario(){
        return this.comentario;
    }
    public setConteudo(conteudo: string){
        this.conteudo = conteudo;
    }
    public setComentario(comentario: string){
        this.comentario.push(comentario);
    }
}