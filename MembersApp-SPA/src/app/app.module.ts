import { AuthService } from './_services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { appRoutes } from './routes';
import { RegisterComponent } from './register/register.component';
import { CustomersComponent } from './customers/customers.component';
import { MoviesComponent } from './movies/movies.component';
import { NewRentalsComponent } from './new-rentals/new-rentals.component';
import { LoginComponent } from './login/login.component';
import { ValuesComponent } from './values/values.component';


@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      NavbarComponent,
      RegisterComponent,
      CustomersComponent,
      MoviesComponent,
      NewRentalsComponent,
      LoginComponent,
      ValuesComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      AuthService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
