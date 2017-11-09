import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Routes, RouterModule} from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NoContentPageComponent } from './pages/nocontent-page/nocontent-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';

import { SidebarComponent } from './sidebar/sidebar.component';
import { appRoutes } from './app-routes';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';

import { CheckService } from './shared/check.service';
import { AuthGuard } from './shared/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    ContactsPageComponent,
    HomePageComponent,
    NoContentPageComponent,
    SidebarComponent,
    LoginFormComponent,
    DashboardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [CheckService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
