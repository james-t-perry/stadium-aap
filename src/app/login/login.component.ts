import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { StadiumService } from '../services/stadium.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StadiumStoreService } from '../services/stadium-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  
  constructor(private userService: UserService, private fb: FormBuilder, private stadiumService: StadiumService, private storeService: StadiumStoreService) { }
  
  login(e){
    e.preventDefault()
    if(this.loginForm.valid){
      this.userService.login(this.loginForm.value.username, this.loginForm.value.password, this.loginForm.value.email, this.loginForm.value.favTeam);
    };
  }
  
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      favTeam:['Chicago Cubs',]
    });
  }

}