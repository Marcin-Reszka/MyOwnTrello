import { Injectable, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Subject } from 'rxjs';
import { LocalService } from '../shared/local.service';
import { Project } from '../shared/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectListService implements OnInit{

  projectsChanged = new Subject<Project[]>();
  //private projectList: Project[]=[new Project("name pro","desc",["person1","person2"],["cat1","cat2"]),new Project("name pro2","desc",["person"],["cat1"])];
  private projectList:Project[]=[];
  

  addProject(project:Project){

    this.projectList.push(project);
    this.projectsChanged.next(this.projectList.slice());
    localStorage.setItem('projects',JSON.stringify(this.projectList));
    console.log(this.projectList);
  }

  ngOnInit(): void {
    
  }

  getProjects(){
    return this.projectList.slice();
    
  }

   correctId(id:string,project:Project){
    return project.id===id;
  }

  getProjectById(id:string){

    return this.projectList.find(project=>project.id==id);
    
  }

 

  constructor(private localService : LocalService) {
    
    this.projectList=JSON.parse(<string>localStorage.getItem('projects')); 
    }
}
