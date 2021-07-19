import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-shopping-list',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {
  @ViewChild('shoppingForm', { static: false }) shoppingForm: NgForm;
  shoppingSubscription: Subscription;
  editMode = false;
  ingredientIndex: number;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.shoppingSubscription = this.shoppingListService.startedEditing.subscribe(
      data => {
        this.editMode = true;
        this.ingredientIndex = data;
        const ingredient = this.shoppingListService.getIngredientById(data);

        this.shoppingForm.setValue({
          ingredientName: ingredient.name,
          ingredientAmount: ingredient.amount
        });
      }
    );
  }

  ngOnDestroy() {
    this.shoppingSubscription.unsubscribe();
  }

  onResetForm() {
    this.editMode = false;
    this.shoppingForm.reset();
  }

  onSubmit() {
    this.editMode
      ? this.shoppingListService.updateIngredient(
          this.ingredientIndex,
          this.shoppingForm.value.ingredientName,
          this.shoppingForm.value.ingredientAmount
        )
      : this.shoppingListService.addIngredient(
          this.shoppingForm.value.ingredientName,
          this.shoppingForm.value.ingredientAmount
        );
    this.onResetForm();
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.ingredientIndex);
    this.onResetForm();
  }
}
