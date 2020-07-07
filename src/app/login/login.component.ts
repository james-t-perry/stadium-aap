import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { StadiumService } from '../services/stadium.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  
  constructor(private userService: UserService, private stadiumService: StadiumService) { }
  
  login(){
    this.userService.login(this.username, this.password);
  }
  
  ngOnInit(): void {
    this.stadiumService.pullStadiums();
    ;
    
    
  }

}