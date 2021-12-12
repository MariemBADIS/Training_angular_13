import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('a test recipe 1', 'yes a new recipe', '../../../../assets/images/recipe.jpg'),
    new Recipe('a test recipe 2', 'ja a new recipe', '../../../../assets/images/recipe.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
