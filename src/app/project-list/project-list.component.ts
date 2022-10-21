import { Component, OnInit, DoCheck  } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from '../shared/local.service';
import { Project } from '../shared/project.model';
import { ProjectListService } from './project-list.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit, DoCheck {
  projects :Project[]=[];
  projectsList: Project[]=[];
  
  constructor(private projectService: ProjectListService, private router: Router, private localService: LocalService) { }
 



  ngOnInit(): void {
    
    this.projectsList=this.projectService.getProjects();
    
    
  }

  ngDoCheck(){
    this.projectsList=this.projectService.getProjects();

  }

}
