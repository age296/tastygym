import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Exercise, ExerciseCategory } from 'src/exercise';
import { WgerServiceApiService } from 'src/wger-service-Api.service';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.sass']
})
export class ExerciseListComponent implements OnInit {
  dataSource: Exercise[] = []
  categoriesId: ExerciseCategory[] = []
  @Input() categories: string[] = [];
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes['categories']['currentValue'])
    this.wgerServiceApiService.exercisesCategory().subscribe(
      data => {
        this.categoriesId = data.results
          .filter(test => changes['categories']['currentValue'].includes(test.name))
          this.searchExercises();
      }
    );



  }
  // displayedColumns: string[] = ['id', 'name', 'description'];
  displayedColumns: string[] = ['position', 'name', 'description'];
  //dataSource = ELEMENT_DATA;
  constructor(private wgerServiceApiService: WgerServiceApiService,
    private router: Router) { }

  ngOnInit() {
  }

  searchExercises(){
    this.wgerServiceApiService.searchExercise(this.categoriesId).subscribe(
      data => {this.dataSource = data.results
      console.log(data.results)}
    );
  }
  redirect(row: any): void {
    this.router.navigate(['/dashboard/exercise/', row.id]);
  }
}
