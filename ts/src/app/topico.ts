export class Topico {
    public name: string;
    public text: string;
    public type: string;
    public background: string;

    constructor(name: string, text: string, type: string, background: string) {
        this.name = name;   
        this.text = text;
        this.type = type;
        this.background = background;
    }
}
