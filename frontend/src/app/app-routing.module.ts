import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginServiceService } from 'src/login-service.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventsMarcaWebscrapingComponent } from './events-marca-webscraping/events-marca-webscraping.component';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { ExerciseMenuComponent } from './exercise-menu/exercise-menu.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'dashboard',
  children: [{
    path: "",
  
    loadChildren: () => import('./app-logged.routing').then(mod => mod.AppLoggedRoutes),
    canLoad: [LoginServiceService]
  }
   ]
   , component: DashboardComponent
   , canActivate: [LoginServiceService]
   
},
{path: '**', component: PageNotFoundComponent},
{path: 'error', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginServiceService]
})
export class AppRoutingModule { }
