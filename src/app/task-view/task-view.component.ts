import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Guid } from 'guid-typescript';
import { ProjectListService } from '../project-list/project-list.service';
import { LocalService } from '../shared/local.service';
import { Project } from '../shared/project.model';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskService } from '../shared/task.service';
import { Task } from '../shared/task.model';
import { EditTaskComponent } from './edit-task/edit-task.component';


@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {
  private projectsList: Project[] = [];
  project!: Project;
  tasksList: Task[]=[];
  projectId: string = "";


  constructor(public dialog: MatDialog, private route: ActivatedRoute, private projectService: ProjectListService, private router: Router, private taskService: TaskService) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    dialog.afterAllClosed

  }



  ngOnInit(): void {
    console.log(this.route.snapshot.params)
  //  this.route.queryParams.subscribe(params => {
      this.projectId = <string>this.route.snapshot.paramMap.get('id');
      this.project = <Project>this.projectService.getProjectById(this.projectId);
    //});

    this.tasksList=this.taskService.getTasksList(this.projectId);
    console.log(this.tasksList)


  }
  openDialog(status: string) {
    this.dialog.open(AddTaskComponent, {
      data: {
        project: this.project,
        status: status
      },
    })  .afterClosed()
    .subscribe(() => window.location.reload());;
  }

  

  editTask(task:Task){
    console.log(task);
    this.dialog.open(EditTaskComponent, {
      data: {
        task:task
      }
    });
  };

  checkList(task:Task){
    return (task.status==="To do" && task.projectId===this.project.id)
  };

}




