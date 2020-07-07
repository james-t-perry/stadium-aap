import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router) { }

  logout(): void {
    localStorage.clear()
  }

  login(username: string, password: string): void {
    if (username && password) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password)
      this.router.navigate([`/home/`]);
    }
  }
  

  get user(): string {
    return localStorage.getItem('username');
  }

}