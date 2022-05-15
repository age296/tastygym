import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginServiceService } from 'src/login-service.service';
import { EventsMarcaWebscrapingComponent } from './events-marca-webscraping/events-marca-webscraping.component';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { ExerciseMenuComponent } from './exercise-menu/exercise-menu.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'test', component: ExerciseListComponent, canActivate: [LoginServiceService],     

}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
