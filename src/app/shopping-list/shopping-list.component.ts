import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';
import { IngredientType } from '../shared/ingredient.model'; // Adjust import if needed

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'] // Adjust if needed
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  groupedIngredients: { [key in IngredientType]: Ingredient[] } = {
    [IngredientType.Meat]: [],
    [IngredientType.Veg]: [],
    [IngredientType.Dairy]: [],
    [IngredientType.StoreCupboard]: [],
    [IngredientType.Pasta]: [],
    [IngredientType.Fish]: [],
    [IngredientType.HerbsAndSpices]: [],
    [IngredientType.Fruit]: [],
  };
  ingredientTypes = Object.values(IngredientType); // Get all ingredient types
  private igChangeSub: Subscription;

  constructor(private slService: ShoppingListService, private loggingService: LoggingService) {}

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.groupIngredientsByType(this.ingredients);

    this.igChangeSub = this.slService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
          this.groupIngredientsByType(this.ingredients);
        }
      );

    this.loggingService.printLog('Hello from ShoppingListComponent NgOnInit');
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy() {
    if (this.igChangeSub) {
      this.igChangeSub.unsubscribe();
    }
  }

  groupIngredientsByType(ingredients: Ingredient[]) {
    this.groupedIngredients = {
      [IngredientType.Meat]: [],
    [IngredientType.Veg]: [],
    [IngredientType.Dairy]: [],
    [IngredientType.StoreCupboard]: [],
    [IngredientType.Pasta]: [],
    [IngredientType.Fish]: [],
    [IngredientType.HerbsAndSpices]: [],
    [IngredientType.Fruit]: [],
    };

    if (ingredients) {
      ingredients.forEach(ingredient => {
        if (this.groupedIngredients[ingredient.type]) {
          this.groupedIngredients[ingredient.type].push(ingredient);
        } else {
          console.warn(`Unexpected ingredient type: ${ingredient.type}`);
        }
      });
    } else {
      console.warn('No ingredients available');
    }
  }
}
