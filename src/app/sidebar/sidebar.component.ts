import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  activeUrl: string;

  constructor(private router: Router) {
    router.events.subscribe((events: NavigationEnd) => this.activeUrl = events.url);
  }

  ngOnInit() {
  }

}
