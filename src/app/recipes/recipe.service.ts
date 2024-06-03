import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


import { Recipe } from './recipe.model'
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();


    private recipes: Recipe[] = [
        new Recipe('Chorizo Mozzarella Gnocchi Bake', 
        'This is simply a test', 
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=375,341',
        [
            new Ingredient('Chorizo', 1),
            new Ingredient('Mozzarella', 1),
            new Ingredient('Gnocchi', 20)
        ]),
        new Recipe('Mushroom and Leek Pasta',
         'This is simply a test', 
        'https://i.pinimg.com/originals/02/8c/2f/028c2f05fe878ca2e4451a45641a2ad8.jpg',
        [
            new Ingredient('Mushrooms', 8),
            new Ingredient('Leeks', 1),
            new Ingredient('Rigatoni', 50),
            new Ingredient('Garlic', 1)
        ]),
        new Recipe('Bengali Curry', 
        'This is a Bengali Curry', 
        'https://www.krumpli.co.uk/wp-content/uploads/2023/05/Beef-Bhuna-Curry-04.jpg',
        [
            new Ingredient('Chicken Thighs', 6),
            new Ingredient('Onions', 2),
            new Ingredient('Spices', 3),
            new Ingredient('Garlic', 1),
            new Ingredient('Rice', 100)
        ])
      ];

      constructor(private slService: ShoppingListService) {}

      setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
      }

      getRecipes() {
        return this.recipes.slice();
      }

      getRecipe(index: number) {
        return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }

      addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
      }
}