import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { ProjectListService } from '../project-list/project-list.service';
import { Project } from '../shared/project.model';


@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  workerList : string[]=[];
  categoryList : string[]=[];

  
  nameFormGroup = this._formBuilder.group({
    nameCtrl: ['', Validators.required],
  });
  descriptionFormGroup = this._formBuilder.group({
    descriptionCtrl: ['', Validators.required],
  });
  workerFormGroup = this._formBuilder.group({
    workerCtrl: ['', Validators.required],
  });
  categoryFormGroup = this._formBuilder.group({
    categoryCtrl: ['', Validators.required],
  });
  
  submit(){
    console.log('workin');
     this.projectService.addProject( new Project(this.nameFormGroup.value.nameCtrl,this.descriptionFormGroup.value.descriptionCtrl,this.workerList,this.categoryList));
  }

  constructor(private _formBuilder: FormBuilder, private projectService: ProjectListService) { }

  ngOnInit(): void {
  }

  onAddWorker(){
    
    this.workerList.push(this.workerFormGroup.value.workerCtrl);
  }

  onAddCategory(){
    this.categoryList.push(this.categoryFormGroup.value.categoryCtrl);
  }

}
