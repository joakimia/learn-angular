import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { SelectRecipeComponent } from './recipe-book/select-recipe/select-recipe.component';
import { NewRecipeComponent } from './recipe-book/new-recipe/new-recipe.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipeBookComponent,
    children: [
      { path: '', component: SelectRecipeComponent },
      { path: 'new', component: NewRecipeComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: NewRecipeComponent }
    ]
  },
  { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
