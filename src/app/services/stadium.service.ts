import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stadium } from '../interfaces/stadium.interface';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators'
import { StadiumStoreService } from './stadium-store.service';

@Injectable({
  providedIn: 'root'
})

export class StadiumService {
  stadiums: Stadium[]
  constructor(private http: HttpClient, private storeService: StadiumStoreService) { 
  }

 
  pullStadiums(){
    this.http.get(`https://services1.arcgis.com/Hp6G80Pky0om7QvQ/arcgis/rest/services/MajorSportVenues_Usage_gdb/FeatureServer/0/query?where=USE_%20%3D%20%27MLB%27&outFields=*&outSR=4326&f=json`).pipe(
      map(res => res['features'].map(f => f.attributes))
    ).subscribe((res: Stadium[]) => this.storeService.setStadiums(res))
    ; 
  }


  // Includes NFL Stadiums
  // pullStadiums(){
  //   this.http.get(`https://services1.arcgis.com/Hp6G80Pky0om7QvQ/arcgis/rest/services/MajorSportVenues_Usage_gdb/FeatureServer/0/query?where=USE_%20%3D%20%27MLB%27%20OR%20USE_%20%3D%20%27NFL%27&outFields=USE_,USE_POP,TEAM,LEAGUE,CONFERENCE,ROOF_TYPE,STADIUM_SH,ADDDATE,USEWEBSITE,COMMENTS,DIVISION,OBJECTID&outSR=4326&f=json`).pipe(
  //     map(res => res['features'].map(f => f.attributes))
  //   ).subscribe((res: Stadium[]) => this.storeService.setStadiums(res))
  //   ; 
  // }

}