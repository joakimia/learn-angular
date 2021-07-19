import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Kebab',
      'Medium, alt på, uten skruer',
      'https://www.recipetineats.com/wp-content/uploads/2017/11/Chicken-Doner-Kebab-2.jpg',
      [
        new Ingredient('Salat', 2),
        new Ingredient('Dressing', 1),
        new Ingredient('Mais', 10),
        new Ingredient('Kyllingkjøtt', 4)
      ]
    ),
    new Recipe(
      'Børek',
      'Kylling, med litt måke',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Motani_burek_1.gif/250px-Motani_burek_1.gif',
      [
        new Ingredient('Kyllingkjøtt', 2),
        new Ingredient('Måke', 1),
        new Ingredient('Salat', 10),
        new Ingredient('Agurk', 4)
      ]
    )
  ];

  recipesChanged = new Subject<Recipe[]>();

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeById(id: number) {
    return this.recipes[id];
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
