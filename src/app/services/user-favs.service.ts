import { Injectable } from '@angular/core';
import { StadiumStoreService } from './stadium-store.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Stadium } from '../interfaces/stadium.interface';

@Injectable({
  providedIn: 'root'
})
export class UserFavsService {

  constructor(private storeService: StadiumStoreService) { }

  private readonly _userStadiums = new BehaviorSubject<Stadium[]>([]);

  readonly userStadiums$ : Observable<Stadium[]> = this._userStadiums.asObservable();

  private get userStadiums() : Stadium []{
    return this._userStadiums.getValue();
  }

  private set userStadiums(val: Stadium[]){
    this._userStadiums.next(val)
  }

  addStadium(userStadiums: Stadium[]): void{
    this.userStadiums = [...this.userStadiums, ...userStadiums]
  }

  // removeStadium(OBJECTID: number){
  //   this.userStadiums.filter()
  // }
}
