import { Component, OnInit } from '@angular/core';

import { MdDialog } from '@angular/material';
import { NewTaskComponent } from '../new-task/new-task.component';
import { CopyTaskComponent } from '../copy-task/copy-task.component';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';

import { NewTaskListComponent } from '../new-task-list/new-task-list.component';



@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.css']
})
export class TaskHomeComponent implements OnInit {

  lists = [
    {
      id: 1,
      name: '待办',
      tasks: [
        {
          id: 1,
          desc: '任务一：去星巴克买杯咖啡',
          completed: true,
          priority: 3, //优先级
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
          reminder: new Date(),
        },
        {
          id: 2,
          desc: '任务二：PPT',
          completed: false,
          priority: 2,
          owner: {
            id: 1,
            name: '李四',
            avatar: 'avatars:svg-12'
          },
          dueDate: new Date(),
        },
        {
          id: 3,
          desc: '任务三：原牛大脑计划',
          completed: false,
          priority: 2,
          owner: {
            id: 1,
            name: '李四',
            avatar: 'avatars:svg-12'
          },
          dueDate: new Date(),
        }
      ]
    },

    {
      id: 2,
      name: '进行中',
      tasks: [
        {
          id: 1,
          desc: '任务三：代码评审',
          completed: false,
          priority: 1,
          owner: {
            id: 1,
            name: '王五',
            avatar: 'avatars:svg-13'
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: '任务四：APP',
          completed: false,
          priority: 2,
          owner: {
            id: 1,
            name: '王三',
            avatar: 'avatars:svg-16'
          },
          dueDate: new Date(),
        }
      ]
    },

    {
      id: 3,
      name: '完成',
      tasks: [
        {
          id: 1,
          desc: '任务三：代码评审',
          completed: false,
          priority: 3,
          owner: {
            id: 1,
            name: '王五',
            avatar: 'avatars:svg-13'
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: '任务四：APP',
          completed: false,
          priority: 1,
          owner: {
            id: 1,
            name: '王三',
            avatar: 'avatars:svg-16'
          },
          dueDate: new Date(),
        },

        {
          id: 1,
          desc: '任务三：代码评审',
          completed: false,
          priority: 3,
          owner: {
            id: 1,
            name: '王五',
            avatar: 'avatars:svg-13'
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: '任务四：APP',
          completed: false,
          priority: 1,
          owner: {
            id: 1,
            name: '王三',
            avatar: 'avatars:svg-16'
          },
          dueDate: new Date(),
        },

      ]
    }
  ]

  constructor(private dialog: MdDialog) { }

  ngOnInit() {
  }

  // launchNewTaskDialog() {
  //   this.dialog.open(NewTaskComponent);
  // }

  launchNewTaskDialog() {
    const dialogRef = this.dialog.open(NewTaskComponent, {data: {title: '新建任务'}});
  }

  launchCopyTaskDialog() {
    const dialogRef = this.dialog.open(CopyTaskComponent, {data: {lists: this.lists}});
  }

  launchUpdateTaskDialog(task) {
    const dialogRef = this.dialog.open(NewTaskComponent, {data: {title: '修改任务', task: task}});
  }

  launchConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: {title: '删除任务列表：', content: '您确定删除该任务列表吗？'}});
    dialogRef.afterClosed().subscribe(result => console.log(result));  // afterClosed() Rxjs 里的可观察对
  }



  launchEditListDialog(task) {
    const dialogRef = this.dialog.open(NewTaskListComponent, {data: {title: '更改列表名称'}});
    dialogRef.afterClosed().subscribe(result => console.log(result));  // afterClosed() Rxjs 里的可观察对
  }

  launchNewListDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, {data: {title: '新建列表：'}});
    dialogRef.afterClosed().subscribe(result => console.log(result));  // afterClosed() Rxjs 里的可观察对
  }

  
}








