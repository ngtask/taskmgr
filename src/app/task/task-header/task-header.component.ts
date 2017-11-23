import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.css']
})
export class TaskHeaderComponent implements OnInit {

  @Input() header = ''; //输入型 属性 header
  @Output() newTask = new EventEmitter<void>();
  @Output() moveAll = new EventEmitter<void>();
  @Output() delList = new EventEmitter<void>();

  @Output() onEditList = new EventEmitter<void>();

  
  constructor() { }

  ngOnInit() {
  }

  onNewTaskClick() {
    this.newTask.emit();
  }

  onMoveAllClick() {
    this.moveAll.emit();
    console.log('onMoveAllClick');
  }

  onDelListClick() {
    this.delList.emit();
    console.log('onDelListClick');
  }

  onEditListClick() {
    this.onEditList.emit();
  }


  


}



