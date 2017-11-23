import { Component, OnInit, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import { cardAnim } from '../../anims/card.anim';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css'],
  animations: [
    cardAnim
  ]
})
export class ProjectItemComponent implements OnInit {

  @Input() item; //设置输入型属性  project-list才能在 project-item 显示 item  ， 向子组件传递参数
  @Output() onInvite = new EventEmitter<void>();
  @Output() onEdit = new EventEmitter<void>();
  @Output() onDel = new EventEmitter<void>();

  @HostBinding('@card') cardState = 'out';
  // 相当于对应html [@card]="cardState"

  
  constructor() { }

  ngOnInit() {
  }


  @HostListener('mouseenter', ['$event.target'])
  onMouseEnter(target) {
    this.cardState = 'hover';
    console.log(target);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.cardState = 'out';
  }


  onInviteClick() {
    this.onInvite.emit();
  }

  onEditClick() {
    this.onEdit.emit();
  }

  onDelClick() {
    this.onDel.emit();
  }


}



