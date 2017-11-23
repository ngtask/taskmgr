import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  items: string[];

  constructor() { 
    const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13];
    this.items = nums.map(d => `avatars:svg-${d}`);
  }

  ngOnInit() {
  }

}




