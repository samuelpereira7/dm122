import { Component, OnInit } from '@angular/core';
import Task from '../model/task.model';
import { Router } from '@angular/router';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {

  task: Task;
  isEdit: boolean = false;
  priorities = ["Urgente", "Média", "Baixa"];
  selectedPriority: string;

  constructor(private router: Router, private todoSevice: TodoService) {
    
    this.task = {id: null, name: '', detail: '', priority: 'Urgente'};
    this.task = <Task> this.router.getCurrentNavigation().extras.state.task;
  }

  ngOnInit() {
    this.isEdit = false;
    
    if(this.task && this.task.id){
      this.isEdit = true
      this.selectedPriority = this.task.priority
    }
  }

  save(){
    this.task.priority = this.selectedPriority;
    
    if(this.isEdit){
      this.todoSevice.update(this.task)
    } else {
      this.todoSevice.add(this.task)
    }
    
    this.router.navigate(['/home'])
  }

}
