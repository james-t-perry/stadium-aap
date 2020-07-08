import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { Stadium } from '../interfaces/stadium.interface';
import { UserFavsService } from '../services/user-favs.service';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user$: Observable<string>
  favStadiums$: Observable<Stadium[]>
  constructor(private userService: UserService, private userFavs: UserFavsService) {
    this.user$ = this.userService.user$;
    this.favStadiums$ = this.userFavs.userStadiums$;
   }


  ngOnInit(): void {

  }

}
