import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'qs-main',
  templateUrl: './main.layout.html',
})

export class MainLayout implements OnInit {

  routes: Object[] = [
    {
      title: 'Dashboard',
      route: '/',
      icon: 'dashboard',
    },
    {
      title: 'Assets',
      route: '/',
      icon: 'dashboard',
    },
  ];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    // no op
  }

}
