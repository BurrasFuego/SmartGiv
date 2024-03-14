import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginComponent } from './components/login/login.component';
import { ModelsComponent } from './models/models.component';
import { RouterModule } from '@angular/router';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { RegisterContributorComponent } from './components/register-contributor/register-contributor.component';
import { RegisterOrganizationComponent } from './components/register-organization/register-organization.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { OrganizationDashboardComponent } from './components/organization-dashboard/organization-dashboard.component';
import { HomeListComponent } from './components/home-list/home-list.component';
import { HomeFormComponent } from './components/home-form/home-form.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideBarComponent,
    NavigationComponent,
    LoginComponent,
    ModelsComponent,
    CreateAccountComponent,
    RegisterContributorComponent,
    RegisterOrganizationComponent,
    ResetPasswordComponent,
    OrganizationDashboardComponent,
    HomeListComponent,
    HomeFormComponent,
    SplashScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
