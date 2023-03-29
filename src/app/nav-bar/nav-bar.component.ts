import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  loggedinUser!: string;
  constructor(private alertify: AlertifyService,
    private router: Router) {}

  ngOnInit() {}

  loggedin() {
    const userName = localStorage.getItem('userName');
    this.loggedinUser = userName !== null ? userName : '';
    return this.loggedinUser;
  }

  onLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    this.router.navigate(['user/login']);
    this.alertify.success('You are logged out !');
  }
}
