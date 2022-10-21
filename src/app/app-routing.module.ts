import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProjectComponent } from './add-project/add-project.component';
import { TaskViewComponent } from './task-view/task-view.component';

const routes: Routes = [
  {path: 'add-project', component:AddProjectComponent},
  {path: 'task-view/:id', component:TaskViewComponent
 //   {
 //     path: ':id', component: TaskViewComponent,
//  }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
