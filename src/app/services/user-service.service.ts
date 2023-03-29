import { Injectable } from '@angular/core';
import { UserForRegister } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  addUser(user:UserForRegister) {
    let users = [];
    if (localStorage.getItem('Users')) {
      var data = localStorage.getItem('Users');
      users = JSON.parse(data || '{}');
      users = [user, ...users];
    } else {
      users = [user];
    }
    localStorage.setItem('Users', JSON.stringify(users));
  }
}
