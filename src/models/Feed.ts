import { Postagem } from "./Postagem";

export class Feed {

    private conteudo: Array<Postagem>;

    constructor(cont: Array<Object>){
        let con: Postagem;
        cont.forEach(element => {
            con = new Postagem(element.mensagem, element.data);
            this.conteudo.push(con);
        });
    }
    public getConteudo(){
        return this.conteudo;
    }
    public setConteudo(cont: Postagem){
        this.conteudo.push(cont);
    }
}