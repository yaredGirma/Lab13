import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DbService } from './db.service';
import { StudentsComponent } from './students.component';
import { HomeComponent } from './home.component';
import { ProfileComponent } from './profile.component';
import { ErrorComponent } from './error.component';
import { CanActivateGuard } from './canactivate.guard';


const MY_ROUTES : Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'students', component:StudentsComponent},
  {path: 'home', component:HomeComponent},
  {path: 'profile/:id', component:ProfileComponent,canActivate:[CanActivateGuard]},
  {path: 'error', component:ErrorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    HomeComponent,
    ProfileComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(MY_ROUTES)
  ],
  providers: [DbService,CanActivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
