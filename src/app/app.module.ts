import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './views/footer/footer.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ExpertComponent } from './components/expert/expert.component';
import { ListExpertsComponent } from './components/list-experts/list-experts.component';

import { RouterModule } from '@angular/router'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule }  from '@angular/material/input';
import { MatFormFieldModule }  from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatChipsModule } from '@angular/material/chips'
import { MatButtonModule } from '@angular/material/button';
import { MaterialsComponent } from './components/materials/materials.component';
import { DetailexpertComponent } from './components/detailexpert/detailexpert.component';
import { RevisionComponent } from './components/revision/revision.component';
import { ScheduleComponent } from './components/schedule/schedule.component'
import { GamesComponent } from './components/games/games.component';
import { LoaderComponent } from './views/loader/loader.component';
import { ReporteComponent } from './components/reporte/reporte.component'
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { LayoutComponent } from './components/layout/layout.component'

@NgModule({
  exports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule,
    MatCardModule,
    MatGridListModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    PdfViewerModule,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    ProfileComponent,
    ExpertComponent,
    ListExpertsComponent,
    MaterialsComponent,
    DetailexpertComponent,
    RevisionComponent,
    ScheduleComponent,
    GamesComponent,
    LoaderComponent,
    ReporteComponent,
    LayoutComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule,
    MatCardModule,
    MatGridListModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    PdfViewerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
