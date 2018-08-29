export class Task{
    private id:number;
    private name:string;
    private detail:string;
    private priority: string;
    constructor(name:string, detail:string, priority:string){
        this.id = Math.random() * 10000;
        this.name = name;
        this.detail = detail;
        this.priority = priority;
    }
    setName(name:string){
        this.name = name;
    }
    setDetail(detail:string){
        this.detail = detail;
    }
    setPriority(priority:string){
        this.priority = priority;
    }
    getName(): string{
        return this.name;
    }
    getDetail(): string{
        return this.detail;
    }
    getPriority(): string{
        return this.priority;
    }
    setId(id: number){
        this.id = id;
    }
    getId(): number{
        return this.id;
    }
}
