import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { DetailsComponent } from './details/details.component';
import { DisplayComponent } from './display/display.component';
import { LoginGuard } from './login.guard';
import { UserGuard } from './user.guard';


const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate: [LoginGuard], data: {animation: 'LoginPage'}},
  {path: 'home', component: DisplayComponent, canActivate: [UserGuard], data: {animation: 'HomePage'}},
  {path: 'user/:username', component: UserComponent, canActivate: [UserGuard], data:{animation: 'UserPage'}},
  {path: 'details/:detail', component: DetailsComponent, canActivate: [UserGuard], data: {animation: 'DetailsPage'}},
  {path: '**', redirectTo: '/login'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
