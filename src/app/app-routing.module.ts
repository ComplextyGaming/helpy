import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component'
import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component'
import { ExpertComponent } from  './components/expert/expert.component'
import { ProfileComponent } from './components/profile/profile.component'
import { GamesComponent } from './components/games/games.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'games',
    component: GamesComponent
  },
  {
    path: 'expert',
    component: ExpertComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
