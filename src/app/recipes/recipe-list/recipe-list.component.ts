import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Chorizo Mozarella Gnocchi Bake', 'This is simply a test', 
    'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=375,341' ),
    new Recipe('Mushroom and Leek Pasta', 'This is simply a test', 
    'https://i.pinimg.com/originals/02/8c/2f/028c2f05fe878ca2e4451a45641a2ad8.jpg' ),
    new Recipe('Bengali Curry', 'This is a Bengali Curry', 'https://www.krumpli.co.uk/wp-content/uploads/2023/05/Beef-Bhuna-Curry-04.jpg')

  ];

  constructor() {
  }

  ngOnInit() {}

  onRecipeSeleced(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
