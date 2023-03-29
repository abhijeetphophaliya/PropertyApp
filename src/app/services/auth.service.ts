import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  authUser(user: any) {
    let userArray: any = [];

    if (localStorage.getItem('Users')) {
      const userJson = localStorage.getItem('Users');
      userArray = userJson !== null ? JSON.parse(userJson) : null;
    }

    return userArray.find( (p: { userName: any; password: any; }) => p.userName === user.userName && p.password === user.password);
  }
}
