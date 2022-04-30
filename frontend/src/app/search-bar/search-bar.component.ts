import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { WgerServiceApiService } from 'src/wger-service-Api.service';
import { ExerciseCategory } from 'src/exercise';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent implements OnInit {
  /*@ViewChild('search', {static: true}) searchElement: ElementRef;
  search="";
  constructor(searchElement: ElementRef) { 
    this.searchElement=searchElement;
  }
  

  ngOnInit() {
  }
  submit(){
    console.log(this.search)
  }*/
  exerciesCategory: ExerciseCategory[] = [];
  separatorKeysCodes: number[] = [ENTER, COMMA];
  exerciseCtrl = new FormControl();
  filteredexercises: Observable<ExerciseCategory[]>;
  exercises: string[] = [];
  @Output()  newItemEvent = new EventEmitter<string[]>();
  @ViewChild('exerciseInput') exerciseInput: ElementRef<HTMLInputElement>;

  constructor(exerciseInput: ElementRef, private wgerServiceApiService: WgerServiceApiService) {
    this.exerciseInput = exerciseInput;
    this.filteredexercises = this.exerciseCtrl.valueChanges.pipe(
      startWith(null),
      map((exercise: ExerciseCategory | undefined) => (exercise && exercise.name ? this._filter(exercise.name) : this.exerciesCategory.slice())),

    );
  }
  ngOnInit(): void {
    this.wgerServiceApiService.exercisesCategory().subscribe(data => this.exerciesCategory = data.results);
  }

  resetCategories(){
    this.filteredexercises = this.exerciseCtrl.valueChanges.pipe(
      startWith(null),
      map((exercise: ExerciseCategory | undefined) => (exercise && exercise.name ? this._filter(exercise.name) : this.exerciesCategory.slice())),

    );
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    console.log(value)
    // Add our exercise
    if (value) {
      this.exercises.push(value);
    }
    this.removeExercise(value);
    // Clear the input value
    event.chipInput!.clear();

    this.exerciseCtrl.setValue(null);
  }
  removeExercise(exercise: string): void {
    if (this.exerciesCategory) {
      const index = this.exerciesCategory.map(function (e) { return e.name; }).indexOf(exercise);

      if (index >= 0) {
        this.exerciesCategory.splice(index, 1);
      }
      this.resetCategories();
    }
  }
  remove(exercise: string): void {
    const index = this.exercises.indexOf(exercise);
    
    if (index >= 0) {
      this.exercises.splice(index, 1);
    }
    this.exerciesCategory.push({name: exercise, id:1})
    this.exerciesCategory.sort((a, b) => {
      return a.name.localeCompare(b.name);
    } )
    this.resetCategories();
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.exercises.push(event.option.viewValue);
    this.exerciseInput.nativeElement.value = '';
    this.exerciseCtrl.setValue(null);
    this.removeExercise(event.option.viewValue);
  }

  private _filter(value: string): ExerciseCategory[] {
    const filterValue = value.toLowerCase();

    return this.exerciesCategory.filter(exercise => exercise.name.toLowerCase().includes(filterValue));
  }
  submit() {
    this.newItemEvent.emit(this.exercises)
  }
}
