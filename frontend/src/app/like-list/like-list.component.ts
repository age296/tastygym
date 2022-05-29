import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/backend.service';
import { ApiExercisesDetails, Exercise, ExerciseCategory } from 'src/exercise';
import { WgerServiceApiService } from 'src/wger-service-Api.service';
import { ExerciseComponent } from '../exercise/exercise.component';

@Component({
  selector: 'app-like-list',
  templateUrl: './like-list.component.html',
  styleUrls: ['./like-list.component.scss']
})
export class LikeListComponent implements OnInit {

  dataSource: Array<Exercise> = new Array<Exercise>();
  
  constructor(private wgerServiceApiService: WgerServiceApiService,
    private router: Router,
    private backend: BackendService) { 
  }
    

  ngOnInit() {
    
    this.backend.getExercises().subscribe(data => {
 
      for (let exercise of data) {
        this.wgerServiceApiService.moreInfoExercise(exercise.idExercise).subscribe(data => {
          this.dataSource.push(data);
        });
      }
      console.log(this.dataSource)
      console.log(this.dataSource.length)
    })

  }

  redirect(row: any): void {
    this.router.navigate(['/dashboard/exercise/', row.id]);
  }
}
