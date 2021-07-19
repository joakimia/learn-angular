import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  private ingredients = [
    new Ingredient('Salat', 2),
    new Ingredient('Måke', 5),
    new Ingredient('Zauz', 3)
  ];

  shoppingListUpdated = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredientById(index: number) {
    return this.ingredients[index];
  }

  addIngredient(name: string, amount: number) {
    this.ingredients.push(new Ingredient(name, amount));
    this.shoppingListUpdated.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
  }

  updateIngredient(index: number, name: string, amount: number) {
    this.ingredients[index].name = name;
    this.ingredients[index].amount = amount;
    this.shoppingListUpdated.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.shoppingListUpdated.next(this.ingredients.slice());
  }
}
