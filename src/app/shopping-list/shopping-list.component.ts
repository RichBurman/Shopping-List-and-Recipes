import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';
import { IngredientType } from '../shared/ingredient.model'; // Adjust import if needed
import jsPDF from 'jspdf';

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

  generatePDF() {
    const doc = new jsPDF();
    let yPosition = 10; // Initial vertical position for text
    
    // Title
    doc.setFontSize(18);
    doc.text('Shopping List', 10, yPosition);
    yPosition += 15; // Space between title and content
  
    // Iterate over each ingredient type
    this.ingredientTypes.forEach(type => {
      const ingredients = this.groupedIngredients[type];
      
      if (ingredients.length > 0) {
        // Add heading for each type
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text(type, 10, yPosition);
        yPosition += 10; // Space after heading
  
        // Add ingredients for this type
        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        ingredients.forEach(ingredient => {
          // Format: Name (Amount) - Recipe
          const recipeInfo = ingredient.recipeName ? ` - From: ${ingredient.recipeName}` : '';
          doc.text(`${ingredient.name} (${ingredient.amount})${recipeInfo}`, 10, yPosition);
          yPosition += 10; // Move down for the next item
        });
  
        yPosition += 5; // Extra space between different types
      }
    });
  
    // Save the PDF
    doc.save('shopping-list.pdf');
  }
}

