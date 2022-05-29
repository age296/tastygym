import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsMarcaWebscrapingComponent } from './events-marca-webscraping/events-marca-webscraping.component';
import { ExerciseMenuComponent } from './exercise-menu/exercise-menu.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { LikeListComponent } from './like-list/like-list.component';

const routes: Routes = [
  { path: 'exercises', component: ExerciseMenuComponent },
  { path: 'exercise/:id', component: ExerciseComponent },
  { path: 'events', component: EventsMarcaWebscrapingComponent },
  { path: 'like', component: LikeListComponent}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
})
export class AppLoggedRoutes {}
