import { AuthGuard } from './_guards/auth.guard';
import { CustomersComponent } from './customers/customers.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { ValuesComponent } from './values/values.component';

export const appRoutes: Routes = [
   { path: 'home', component: HomeComponent},
   { path: 'register', component: RegisterComponent},
   { path: 'login', component: LoginComponent},
   {
      path: '',
      runGuardsAndResolvers: 'always',
      canActivate: [AuthGuard],
      children: [
         { path: 'movies', component: MoviesComponent},
         { path: 'values', component: ValuesComponent},
         { path: 'customers', component: CustomersComponent},
      ]
   },
   { path: '**', redirectTo: 'home', pathMatch: 'full'},

];

