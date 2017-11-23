import { Component } from '@angular/core';

import { OverlayContainer } from '@angular/material';
// import { trigger, state, transition, style, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // animations: [
  //   // trigger('square', [state('green', style({'backgroud-color': 'green'}))])  //触发器 square

  //   // trigger('square',
  //   //   [
  //   //     state('green', style({'backgroud-color': 'green'})),
  //   //     state('red', style({'backgroud-color': 'red'})),
  //   //     transition('green => red', animate(1000))
  //   //   ]    
  //   // )
    
  // ]
})


export class AppComponent {


  // squareState: string;
  darkTheme = false;

  constructor(private oc: OverlayContainer) {

  }


  switchTheme(dark) {
    this.darkTheme = dark;
    //this.oc.themeClass = dark ? 'myapp-dark-theme' : null;
  }

  // onClick() {
  //   this.squareState = this.squareState ? null : 'green';
  //   console.log('------ squareState ---------')
  // }

}




