import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.css']
})
export class InviteComponent implements OnInit {

  items = [
    {
      id: 1,
      name: 'zheng'
    },
    {
      id: 2,
      name: 'aurochs'
    },
    {
      id: 3,
      name: 'AUROCHS'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  displayUser(user: {id: string; name: string}) {
    console.log(user);
    return user ? user.name : '';
  }

  // export interface User {
  //   id: string; 
  //   name: string;
  // }

  onClick() {
    console.log('InviteComponent');
  }

}













