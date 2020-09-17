import { Component } from '@angular/core';
import Task from '../model/task.model'
import { IonItemSliding} from '@ionic/angular';
import { Router } from '@angular/router';
import getPriority from '../model/priorities.model'
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title: string = "DM122";
  tasks: Array<Task>

  constructor(private router: Router, private todoService: TodoService) {
    /*
    this.tasks = new Array<Task>();
    this.tasks.push({
      id: 1,
      name: 'Task 1',
      detail: 'Supermercado',
      priority: 'Urgente'
    },
    {
      id: 2,
      name: 'Task 2',
      detail: 'Farmácia',
      priority: 'Média'
    },
    {
      id: 3,
      name: 'Task 3',
      detail: 'Farmácia',
      priority: 'Baixa'
    })*/
    this.tasks = this.todoService.load();
  }

  editar(task: Task, slidingItem: IonItemSliding){
    slidingItem.close();
    this.router.navigate(['/task'], {state: {task: task}})
  }

  delete(task: Task, slidingItem: IonItemSliding){
    slidingItem.close();
    this.todoService.remove(task);
    this.tasks = this.todoService.load();
  }

  goToTaskPage(){
    this.router.navigate(['/task'], {state: {task: {}}})
  }

  getClass(task: Task){
    return getPriority(task.priority)
  }
}
