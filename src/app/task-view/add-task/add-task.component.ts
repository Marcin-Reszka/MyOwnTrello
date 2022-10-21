import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Project } from 'src/app/shared/project.model';
import { Task } from 'src/app/shared/task.model';
import { TaskService } from 'src/app/shared/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  newTask!: Task;
  constructor(@Inject(MAT_DIALOG_DATA) public data: {project: Project, status: "string"},private _formBuilder: FormBuilder,private taskService: TaskService) {}
  status: string='';
  project!: Project;
  
  ngOnInit(): void {
    this.project=this.data.project;
    this.status=this.data.status;
    
  }

  nameFormGroup = this._formBuilder.group({
    nameCtrl: ['', Validators.required]
  });

  categoryFormGroup = this._formBuilder.group({
    categoryCtrl: ['', Validators.required]
  });

  workerFormGroup = this._formBuilder.group({
    workerCtrl: ['', Validators.required]
  });

  descFormGroup = this._formBuilder.group({
    descCtrl: ['', Validators.required]
  })

  onAddTask(){
    this.newTask= new Task(this.nameFormGroup.value.nameCtrl,this.categoryFormGroup.value.categoryCtrl,this.workerFormGroup.value.workerCtrl,this.status,this.descFormGroup.value.descCtrl,this.project.id);
    this.taskService.addTask(this.newTask);
    console.log(this.newTask);
  }

  

}
