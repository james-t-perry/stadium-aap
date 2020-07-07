import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { DetailsComponent } from './details/details.component';
import { DisplayComponent } from './display/display.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: DisplayComponent},
  {path: 'user/:username', component: UserComponent},
  {path: 'details/:detail', component: DetailsComponent},
  {path: '**', redirectTo: '/login'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
