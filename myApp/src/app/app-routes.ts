
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { NoContentPageComponent } from './pages/nocontent-page/nocontent-page.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './shared/auth.guard';


export const appRoutes: Routes =[
    { path: '', component: HomePageComponent },
    { path: 'about', component: AboutPageComponent },
    { path: 'contacts', component: ContactsPageComponent },
    { path: 'login-form', component: LoginFormComponent},
    { path: 'dashboard', canActivate:[AuthGuard], component: DashboardComponent},
    { path: '**', component: NoContentPageComponent }
  
];


