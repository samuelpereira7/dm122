import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/* Services */
import { TodoService } from '../../app/services/todo.service'
import { Task } from '../../app/model/task.model';
import { TaskPage } from '../task/task';
import { ItemSliding } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title:string = "DM122";
  tasks:Array<Task>;

  constructor(public navCtrl: NavController, private todoService:TodoService) {
    this.tasks = this.todoService.loadTasks();
  }

  goToTask(){
    this.navCtrl.push(TaskPage);
    //this.navCtrl.push(TaskPage,{"task":this.task});
  }

  editar(task:Task, slidingItem:ItemSliding){
      //console.log(task);
      slidingItem.close();
      this.navCtrl.push(TaskPage, {"task": task});
  }

  delete(task:Task, slidingItem:ItemSliding){
    slidingItem.close();
    this.todoService.removeTask(task);
    this.tasks = this.todoService.loadTasks();
  }
}
