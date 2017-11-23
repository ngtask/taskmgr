import { Component, OnInit, Inject } from '@angular/core';
// import { MD_DIALOG_DATA, MdDialogRef, MdDialog } from '@angular/material'; //MdDialogRef传递数据回去
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material'; //MdDialogRef传递数据回去

@Component({
  selector: 'app-new-task-list',
  templateUrl: './new-task-list.component.html',
  styleUrls: ['./new-task-list.component.css']
})
export class NewTaskListComponent implements OnInit {

  title = "";

  constructor(
    @Inject(MD_DIALOG_DATA) private data,
    // private dialog: MdDialog,
    private dialogRef: MdDialogRef<NewTaskListComponent>) { }


  ngOnInit() {
    this.title = this.data.title;
  }

  onClick() {
    this.dialogRef.close(this.title);
  }





}





