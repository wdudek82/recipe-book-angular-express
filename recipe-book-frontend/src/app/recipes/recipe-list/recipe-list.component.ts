import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipes.component';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Input() recipes: Recipe[] = [];

  constructor() {}

  ngOnInit() {}
}
