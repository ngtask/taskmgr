import { Component, OnInit } from '@angular/core';

import { MdDialog } from '@angular/material';
import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from '../invite/invite.component';

import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects = [
    {
      "name": "企业协作平台",
      "desc": "这是一个企业内部的项目",
      "coverImg": "assets/img/covers/0.jpg",
    },

    {
      "name": "原牛网络科技",
      "desc": "这是一个企业内部的项目",
      "coverImg": "assets/img/covers/1.jpg",
    },
    {
      "name": "原牛网络科技",
      "desc": "这是一个企业内部的项目",
      "coverImg": "assets/img/covers/2.jpg",
    },

    {
      "name": "企业协作平台",
      "desc": "这是一个企业内部的项目",
      "coverImg": "assets/img/covers/3.jpg",
    },
  ];

  constructor(private dialog: MdDialog) { }
  // constructor(public dialog: MdDialog) { }

  ngOnInit() {
    console.log(MdDialog);
  }

  openNewProjectDialog() {
    //this.dialog.open(NewProjectComponent);
    //this.dialog.open(NewProjectComponent, {width: '600px', height: '500px'});
    //this.dialog.open(NewProjectComponent, {position: {left: '0', top: '0'}});

    // const dialogRef = this.dialog.open(NewProjectComponent, {data: 'from pro-list data'});  //传给new-pro

    //const dialogRef = this.dialog.open(NewProjectComponent, {data: {dark: true}});
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {title: '新增项目：'}});
    dialogRef.afterClosed().subscribe(result => console.log(result));  // afterClosed() Rxjs 里的可观察对象
  }

  launchInviteDialog() {
    const dialogRef = this.dialog.open(InviteComponent);
  }

  launchUpdataDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {title: '编辑项目：'}});
  }


  launchConfirmDailogDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: {title: '删除项目：', content: '您确定删除该项目吗？'}});
    dialogRef.afterClosed().subscribe(result => console.log(result));  // afterClosed() Rxjs 里的可观察对
  }

}



