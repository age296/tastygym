import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseMenuComponent } from './exercise-menu/exercise-menu.component';
import { ExerciseComponent } from './exercise/exercise.component';

const routes: Routes = [
  { path: '', component: ExerciseMenuComponent },
  { path: 'exercise/:id', component: ExerciseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
