import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

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
  }

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
