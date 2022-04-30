import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-menu',
  templateUrl: './exercise-menu.component.html',
  styleUrls: ['./exercise-menu.component.sass']
})
export class ExerciseMenuComponent implements OnInit {
  categories: string[] = [];
  constructor() { }

  ngOnInit() {
  }
  addItem(newItem: string[]){
    this.categories = [];
    newItem.forEach(data => this.categories.push(data))
  }
}
