import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component'
import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component'
import { ExpertComponent } from  './components/expert/expert.component'
import { ProfileComponent } from './components/profile/profile.component'
import { GamesComponent } from './components/games/games.component'
import { BrowserModule } from '@angular/platform-browser';
import { ListExpertsComponent } from './components/list-experts/list-experts.component'
import { MaterialsComponent } from './components/materials/materials.component'
import { RevisionComponent } from './components/revision/revision.component'
import { ScheduleComponent } from './components/schedule/schedule.component'

import { DetailexpertComponent } from './components/detailexpert/detailexpert.component'

const routes: Routes = [
  {
    path: '',
    pathMatch:'full', redirectTo:'login'
  }, 
  {
    path: 'home',
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
    path: 'profile/:id',
    component: ProfileComponent
  },
  {
    path: 'games/:id',
    component: ListExpertsComponent
  },
  {
    path: 'materials',
    component: MaterialsComponent
  },
  {
    path: 'games/:gameId/expert/:expertId',
    component: DetailexpertComponent
  },
  {
    path: 'revision',
    component: RevisionComponent
  },
  {
    path: 'expert/:expertId/schedule',
    component: ScheduleComponent
  }

];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // Add options right here
    })
  ],
  declarations: [
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
