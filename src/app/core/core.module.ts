import { NgModule, SkipSelf, Optional } from '@angular/core';

import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';  //core引入 share
// import { MdToolbarModule, MdIconModule, MdButtonModule } from '@angular/material'; //从core 挪到 shered

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
// import { CommonModule } from '@angular/common';

//import { LoginModule } from '../login/login.module'; //从core 挪到了 app.module


import { loadSvgResources } from '../utils/svg.util';



// material移动端拖拽 点按 
// Could not find HammerJS. Certain Angular Material components may not work correctly.
//去除警告 npm install --save hammerjs
import 'hammerjs';

@NgModule({
  imports: [
    // loadSvgResources,
    // CommonModule,
    HttpModule,
    BrowserAnimationsModule,
    SharedModule,
    //LoginModule,
    // MdToolbarModule,
    // MdIconModule,
    // MdButtonModule
  ],
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    SidebarComponent,
  ],
  exports: [
    HeaderComponent, 
    FooterComponent, 
    SidebarComponent,
  ]
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if(parent) {
      throw new Error('模块已经存在，不能再次加载！');
    }
  }
}


//核心模块 core
// 在类的 构造函数 中进行 依赖性注入
// 避免 依赖 循环 SkipSelf Optional

// 其他模块需要CommonModule 只需要导入 shared.module.ts
// core.module.ts 里不再需要导入 CommonModule


// 集成终端 ctrl + `



