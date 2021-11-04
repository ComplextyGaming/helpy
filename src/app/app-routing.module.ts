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
    path: 'detailexpert',
    component: DetailexpertComponent
  },
  {
    path: 'revision',
    component: RevisionComponent
  },
  {
    path: 'schedule',
    component: ScheduleComponent
  }

];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    GamesComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
