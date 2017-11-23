import { Component, OnInit } from '@angular/core';
import { getDate } from 'date-fns'

// E:\aurochs\angular\taskmgr>npm install --save-dev @types/date-fns
// npm WARN deprecated @types/date-fns@2.6.0: This is a stub types definition for date-fns (https://github.com/date-fns/date-fns). date-fns provides its own type
// definitions, so you don't need @types/date-fns installed!

// E:\欧洲野牛\角\任务管理器> npm安装——save-dev @types / date-fns
// npm警告弃用@ types/date- fns@2.6.0:这是date - fns的存根类型定义(https://github.com/date -fns/date- fns)。date- fns提供自己的类型
// 定义，所以您不需要安装@ types/date-fns !


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  today = 'day';

  constructor() { }

  ngOnInit() {
    this.today = `day${getDate(new Date())}`;
  }

}







