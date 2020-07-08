import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { Observable } from 'rxjs';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'stadium-info';
  user: string
  constructor(private userService:UserService) {
  this.userService.user$.subscribe(user => this.user = user)
  }

  logout(){
    this.userService.logout()
  }

  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
