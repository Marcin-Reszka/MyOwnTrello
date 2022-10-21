import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Task } from 'src/app/shared/task.model';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
  task!:Task;
  constructor(@Inject(MAT_DIALOG_DATA) public data: {task:Task}) {}

  ngOnInit(): void {
    console.log(this.data)
    this.task=this.data.task;
    console.log(this.task)
  }

}
