import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import Task from '../model/task.model';

@Injectable()
export class TodoService{
    tasks: Array<Task>;

    constructor(private storage: Storage){
        this.tasks = new Array<Task>();
        this.storage.get('tasks').then(
            (data: Array<Task>) => {
                if(data != null){
                    this.tasks.push(...data)
                }
            }
        )
    }

    add(task: Task){
        task.id = Math.random() * 10000;
        this.tasks.push(task);
        this.storage.set('tasks', this.tasks)
    }

    update(task: Task){
        this.tasks = this.tasks.filter(item => item.id != task.id);
        this.tasks.push(task);
        this.storage.set("tasks", this.tasks);
    }

    load(): Array<Task>{
        return this.tasks;
    }

    remove(task:Task){
        this.tasks = this.tasks.filter(t => t.id !== task.id);
        this.storage.set("tasks", this.tasks);
    }
}


