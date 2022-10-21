import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProjectsPanelComponent } from './projects-panel/projects-panel.component';
import { MaterialModule } from './material/material.module';
import { LayoutComponent } from './layout/layout.component';
import { AddProjectComponent } from './add-project/add-project.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectListService } from './project-list/project-list.service';
import { TaskViewComponent } from './task-view/task-view.component';
import { AddTaskComponent } from './task-view/add-task/add-task.component';
import { TaskService } from './shared/task.service';
import { StatusFilterPipe } from './shared/status-filter.pipe';
import { EditTaskComponent } from './task-view/edit-task/edit-task.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsPanelComponent,
    LayoutComponent,
    AddProjectComponent,
    ProjectListComponent,
    TaskViewComponent,
    AddTaskComponent,
    StatusFilterPipe,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
    
    
  ],
  providers: [ProjectListService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
