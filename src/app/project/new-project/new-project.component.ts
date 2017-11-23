import { Component, OnInit, Inject } from '@angular/core';

import { MD_DIALOG_DATA, MdDialogRef, OverlayContainer } from '@angular/material'; //MdDialogRef传递数据回去   OverlayContainer主题颜色 app.component.ts

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  title = '';
  constructor(
    @Inject(MD_DIALOG_DATA) private data, 
    private dialogRef: MdDialogRef<NewProjectComponent>,
    private oc: OverlayContainer) { }

  ngOnInit() {
    this.title = this.data.title;
    console.log(JSON.stringify(this.data));
    //this.oc.themeClass = this.data.dark ? 'myapp-dark-theme' : null;
  }

  onClick() {
    this.dialogRef.close('I received your message');
  }

}





