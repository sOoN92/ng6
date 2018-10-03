import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  currentUrl: string;

  constructor(private router: Router) {}

  ngOnInit() {
    if (isPlatformBrowser) {
      this.router.events
        .subscribe(() => {
          this.currentUrl = this.router.routerState.snapshot.url;
        })
    }
  }

}
