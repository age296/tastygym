import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(
    private route: ActivatedRoute, 
  //  private location: Location, 
    private wgerServiceApiService: WgerServiceApiService 
    ) { }

  ngOnInit() {
    this.getExercise();
  }
  getExercise(){

    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.wgerServiceApiService.moreInfoExercise(id).subscribe(data => this.apiResult = data);
  }
}
