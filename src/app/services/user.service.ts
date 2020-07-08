import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StadiumStoreService } from './stadium-store.service';
import { StadiumService } from './stadium.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router, private stadiumService: StadiumService, private storeService: StadiumStoreService) { }

  private readonly _user = new BehaviorSubject<string>('');

  readonly user$: Observable<string> = this._user.asObservable()

  private get user(){
    return this._user.getValue();
  }

  private set user(username: string){
    this._user.next(username)
  }

  logout(): void {
    this.user = "";
    this.router.navigate([`/login/`]);
    this.storeService.clearStadiums()
  }

  login(username: string, password: string, email: string, favTeam: string): void {
    if (username && password && email && favTeam) {
      this.user = username
      this.stadiumService.pullStadiums();
      this.router.navigate([`/home/`]);
    }
  }
}