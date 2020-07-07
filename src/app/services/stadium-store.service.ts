import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Stadium } from '../interfaces/stadium.interface';
import { StadiumService } from './stadium.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StadiumStoreService {

  constructor() { }

  private readonly _stadiums = new BehaviorSubject<Stadium[]>([]);

  readonly stadiums$: Observable<Stadium[]> = this._stadiums.asObservable();

  private get stadiums(): Stadium[]{
    return this._stadiums.getValue();
  }

  private set stadiums(val: Stadium[]){
    this._stadiums.next(val)
  }


  setStadiums(stadiums: Stadium[]): void{
    this.stadiums = [...this.stadiums,...stadiums]
    
  }

  byObjectId(OBJECTID:Number){
    return this.stadiums$.pipe(
      map(stadiums => stadiums.filter(s => s.OBJECTID == OBJECTID))
    )
  }
}




// "features":[{"attributes":{"OBJECTID":219,"VENUEID":219,"USE_":"MLB","USE_POP":45050,"TEAM":"LOS ANGELES ANGELS","LEAGUE":"AMERICAN","CONFERENCE":"NOT APPLICABLE","DIVISION":"WEST","INST_AFFIL":"NOT APPLICABLE","TRACK_TYPE":"NOT APPLICABLE","LENGTH_MI":-999,"ROOF_TYPE":"NONE","STADIUM_SH":"NOT APPLICABLE","ADDDATE":1422576000000,"USEWEBSITE":"https://www.mlb.com/angels","COMMENTS":"NOT AVAILABLE"}}