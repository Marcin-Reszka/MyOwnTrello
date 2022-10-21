import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  //tasksList :Task[]=[new Task("test","cat1","person1","To do","bla bla bla","9c84e1d4-754d-50fc-d533-f54e878613d9")];
  tasksList :Task[]=[];
  tasksChanged = new Subject<Task[]>();
  constructor() {
    //localStorage.setItem("tasks",JSON.stringify(this.tasksList))
    this.tasksList=JSON.parse(<string>localStorage.getItem('tasks'));
   }

 getTasksList(id:string){
  return this.tasksList.filter(task=>task.projectId===id);
 }

 addTask(task:Task){
  this.tasksList.push(task);
  this.tasksChanged.next(this.tasksList.slice());
  localStorage.setItem('tasks',JSON.stringify(this.tasksList));
  console.log(this.tasksList);

 }

 arrayUnique(array:Task[]) {
  var a = array.concat();
  for(var i=0; i<a.length; ++i) {
      for(var j=i+1; j<a.length; ++j) {
          if(a[i] === a[j])
              a.splice(j--, 1);
      }
  }
  return a;
}


}
