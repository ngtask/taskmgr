import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// AppComponent.html:5 ERROR Error: Found the synthetic property @square. 
// Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.


// import { MdSlideToggleModule,  MdSlideToggle } from '@angular/material';
import { MdSidenavModule } from '@angular/material';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

//导入 core.module.ts
import { CoreModule } from './core/core.module';

import { LoginModule } from './login/login.module';
import { ProjectModule } from './project/project.module';

import { TaskModule } from './task/task.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdSidenavModule,
    LoginModule,
    ProjectModule,
    TaskModule,
    CoreModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

