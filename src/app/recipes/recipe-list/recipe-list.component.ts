import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'rcp-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is simply a test', '../../assets/images/recipe1.jpg'),
    new Recipe('A test recipe', 'this is simply a test', '../../assets/images/recipe1.jpg')
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
