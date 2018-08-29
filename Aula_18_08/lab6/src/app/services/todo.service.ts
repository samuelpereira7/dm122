import { Injectable } from '@angular/core';
import { Task } from '../model/task.model'

@Injectable()
export class TodoService{
    
    constructor(){

    }

    addTask(task:Task){
        console.log("Add Task");
    }

    editTask(task:Task){
        console.log("Edit Task");
    }

    loadTasks(){
        console.log("Load Tasks");
    }

    removeTask(task:Task){
        console.log("Remove task");
    }
}