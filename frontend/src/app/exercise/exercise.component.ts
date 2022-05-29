import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from 'src/backend.service';
import { ApiExercisesDetails } from 'src/exercise';
import { WgerServiceApiService } from 'src/wger-service-Api.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.sass']
})
export class ExerciseComponent implements OnInit {
  apiResult: ApiExercisesDetails | undefined
  item = "text"
  like = false;
  id = 0;
  constructor(
    private route: ActivatedRoute, 
  //  private location: Location, 
    private wgerServiceApiService: WgerServiceApiService,
    private backend: BackendService,
    ) { }

  ngOnInit() {
    this.getExercise();
    this.status()
  }

  status(){
    this.backend.getExercises().subscribe(data =>{
      this.like = false;
      for(let exercise of data){
        if(exercise.idExercise == this.id) {
          this.like = true;
          break;
        }
      }
    })
  }

  addExercise(){
   this.backend.addExercise(this.id).subscribe(() =>this.status());
  }
  removeExercise(){
    this.backend.removeExercise(this.id).subscribe(() =>this.status());
   }

  getExercise(){
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.wgerServiceApiService.moreInfoExercise(this.id).subscribe(data => this.apiResult = data);
  }
}
