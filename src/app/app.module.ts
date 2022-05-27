import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './PartialComponents/navbar/navbar.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { StudentProfileCardComponent } from './PartialComponents/student-profile-card/student-profile-card.component';
import { FacultyProfileCardComponent } from './PartialComponents/faculty-profile-card/faculty-profile-card.component';
import { FacultyDashboardComponent } from './Components/faculty-dashboard/faculty-dashboard.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SetTokenInterceptor } from './Interceptors/set-token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    PageNotFoundComponent,
    StudentProfileCardComponent,
    FacultyProfileCardComponent,
    FacultyDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SetTokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
