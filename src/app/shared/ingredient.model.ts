export enum IngredientType {
    Meat = 'Meat',
    Veg = 'Vegetables',
    Dairy = 'Dairy',
    StoreCupboard = 'Store Cupboard',
    Pasta = 'Pasta',
    Fish = 'Fish',
    HerbsAndSpices = 'Herbs and Spices',
    Fruit = 'Fruits'
  }
export class Ingredient {
    constructor(public name: string, public amount: string, public type: IngredientType, public recipeName?: string ) {
    }
}