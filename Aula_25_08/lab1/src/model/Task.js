class Task{
    constructor(name, detail, priority){
        this.id = Math.floor(100000 + Math.random() * 900000);
        this.name = name;
        this.detail = detail;
        this.priority = priority;
    }
}

export default Task;