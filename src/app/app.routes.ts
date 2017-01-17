import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { AuthGuard } from './authGuard';

export const appRoutes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'home', component: HomeComponent},
    {path: 'unauthorized', component: UnauthorizedComponent},
    {path: 'profile/:id', component: ProfileComponent, canActivate:[AuthGuard]}
 
]

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);