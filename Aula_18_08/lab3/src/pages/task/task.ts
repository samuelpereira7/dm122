import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Task } from '../../app/model/task.model';
import { TodoService } from '../../app/services/todo.service';
import { HomePage } from '../home/home';
import { Priority } from '../../app/model/Priority';

@IonicPage()
@Component({
  selector: 'page-task',
  templateUrl: 'task.html',
})
export class TaskPage {
  task:Task;
  selectedPriority:string;
  priorities = ["Urgente", "Média", "Baixa"];
  isEdit:boolean = false;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private todoService:TodoService) {

    this.task = this.navParams.get("task");
    if (this.task && this.task.getId() != null) {
        this.setProperty();
        this.isEdit = true;
    } else {
      this.task = new Task("", "", "");
      this.selectedPriority = "";
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskPage');
  }

  salvar(){

    this.task.setPriority(Priority[this.selectedPriority]);

    if(!this.isEdit) {
      this.todoService.addTask(this.task);
      this.navCtrl.push(HomePage);
    } else {
      this.todoService.editTask(this.task);
      this.navCtrl.pop();
    }

  }

  setProperty(){
    this.priorities.forEach(
      item => {
        if (Priority[item] === this.task.getPriority()) {
          this.selectedPriority = item;
        }
      }
    )
  }

}
