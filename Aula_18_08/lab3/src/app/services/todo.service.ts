import { Injectable } from '@angular/core';
import { Task } from '../model/task.model'

//Laboratório 5 (Opcional) – Adicionando armazenamento local
import { Storage } from '@ionic/storage';

@Injectable()
export class TodoService{
    tasks:Array<Task>;
    
    constructor(private storage:Storage){
        //Laboratório 5 (Opcional) – Adicionando armazenamento local
        this.tasks = new Array<Task>();
        this.storage.get('tasks').then(
            (data) => {
                if (data != null) {
                    data.forEach(element => {
                        let task = new Task(element.name,element.detail,element.priority);
                        task.setId(element.id);
                        this.tasks.push(
                            task
                        )
                    });
                }
            }
        )
    }

    addTask(task:Task){
        this.tasks.push(task);
        this.storage.set("tasks", this.tasks);
    }

    editTask(task:Task){
        this.tasks = this.tasks.filter(item => item.getId() != task.getId());
        this.tasks.push(task);
        this.storage.set("tasks", this.tasks);
    }

    loadTasks(){
        return this.tasks;
    }

    removeTask(task:Task){
        this.tasks = this.tasks.filter(t => t.getId() !== task.getId());
        this.storage.set("tasks", this.tasks);
    }
}