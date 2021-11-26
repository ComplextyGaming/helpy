import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component'
import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component'
import { ProfileComponent } from './components/profile/profile.component'
import { GamesComponent } from './components/games/games.component'
import { BrowserModule } from '@angular/platform-browser';
import { ListExpertsComponent } from './components/list-experts/list-experts.component'
import { MaterialsComponent } from './components/materials/materials.component'
import { MenuExpertComponent } from './components/menu-expert/menu-expert.component'
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
  //{
//    path: 'profile',
//=======
    //path: 'expert',
    //component: ExpertComponent
  //},
  {
    path: 'profile/:id',
//>>>>>>> 8b517d2387e48fda1ff6ec2e2b3eb7c018c666eb
    component: ProfileComponent
  },
  {
    path: 'games/:id',
    component: ListExpertsComponent
  },
  {
    path: 'games/:gameId/expert/:expertId',
    component: DetailexpertComponent,
    children: [
      {
        path: 'detail',
        component: MenuExpertComponent
      },
      {
        path: 'material',
        component: MaterialsComponent
      },
      {
        path: 'schedule',
        component: ScheduleComponent
      }
    ]
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
