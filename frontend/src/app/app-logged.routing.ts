import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsMarcaWebscrapingComponent } from './events-marca-webscraping/events-marca-webscraping.component';
import { ExerciseMenuComponent } from './exercise-menu/exercise-menu.component';
import { ExerciseComponent } from './exercise/exercise.component';

const routes: Routes = [
  { path: 'exercises', component: ExerciseMenuComponent },
  { path: 'exercise/:id', component: ExerciseComponent },
  { path: 'events', component: EventsMarcaWebscrapingComponent },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
})
export class AppLoggedRoutes {}
