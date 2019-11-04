import { Component, OnInit } from '@angular/core';

export interface Ingredient {
  name: string;
  amount: number;
  unitType: string;
  basePrice?: number;
  caloriesPerUnit?: number;
}

export interface Recipe {
  name: string;
  description: string;
  imgUrl: string;
  ingredients: Ingredient[];
}

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [
    {
      name: 'Pizza',
      description: 'Tasty pizza',
      imgUrl: 'https://www.dudleysquaregrille.com/files/images/about-us.jpg',
      ingredients: [{ name: '', amount: 0, unitType: '' }],
    },
    {
      name: 'Hamburger',
      description: 'Tasty pizza',
      imgUrl: 'https://www.thespruceeats.com/thmb/HEbGAFMq0PxbLMd3_Ooedlv_sCY=/3000x2000/filters:fill(auto,1)/Hamburger-Hot-Dog-58add5f03df78c345bdef6ff.jpg',
      ingredients: [{ name: '', amount: 0, unitType: '' }],
    },
    {
      name: 'Pasta',
      description: 'Tasty pizza',
      imgUrl: 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/spaghetti-bolognese_2.jpg',
      ingredients: [{ name: '', amount: 0, unitType: '' }],
    },
    {
      name: 'Schnitzel mis Sourkraut',
      description: 'Tasty pizza',
      imgUrl: 'https://www.schuerzentraegerin.de/wp-content/uploads/2017/10/IMG_1497heu-678x470.jpg',
      ingredients: [{ name: '', amount: 0, unitType: '' }],
    },
  ];

  constructor() {}

  ngOnInit() {}
}
