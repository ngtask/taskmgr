import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { TaskRoutingModule } from './task-routing.module';

import { TaskHomeComponent } from './task-home/task-home.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskHeaderComponent } from './task-header/task-header.component';
import { CopyTaskComponent } from './copy-task/copy-task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskListComponent } from './new-task-list/new-task-list.component';


@NgModule({
  imports: [
    SharedModule,
    TaskRoutingModule,
  ],
  declarations: [
    TaskHomeComponent, 
    TaskListComponent, 
    TaskItemComponent, 
    TaskHeaderComponent, 
    CopyTaskComponent, 
    NewTaskComponent, 
    NewTaskListComponent
  ],
  entryComponents: [
    // 如果不加CopyTaskComponent会报错 ERROR Error: No component factory found for CopyTaskComponent. Did you add it to @NgModule.entryComponents?(…)
    CopyTaskComponent, 
    NewTaskComponent,
    NewTaskListComponent,
  ]
})
export class TaskModule { }
