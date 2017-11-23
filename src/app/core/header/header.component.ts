import { Component, OnInit, Output, EventEmitter } from '@angular/core';

// import { MdIconRegistry } from '@angular/material';
// import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggle = new EventEmitter<void>();
  @Output() toggleDarkTheme = new EventEmitter<boolean>();


  constructor() {}
  // constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
  //   iconRegistry.addSvgIcon('member', sanitizer.bypassSecurityTrustResourceUrl('assets/member.svg'));
  //   iconRegistry.addSvgIcon('projects', sanitizer.bypassSecurityTrustResourceUrl('assets/sidebar/projects.svg'));
  // }

  ngOnInit() {
  }

  openSidebar() {
    this.toggle.emit();
    console.log('openSidebar');
  }

}


