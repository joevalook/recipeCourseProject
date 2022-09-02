import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model'

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Mozzarella Pasta',
       'Delicious Pasta with savory Mozzarella',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272',
        [
          new Ingredient('mozarrella cheese', 1),
          new Ingredient('pasta', 120),
          new Ingredient('salt', 1),
          new Ingredient('pepper', 1),
          new Ingredient('basil', 4),
          new Ingredient('tomato sauce', 2)
        ]),
    new Recipe(
      'Monster Burger',
       'Delcious 8 oz burger with you choice of toppings',
        'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p.jpg',
        [
          new Ingredient('mozarrella cheese', 1),
          new Ingredient('patty ', 1),
          new Ingredient('french fries', 20),
          new Ingredient('lettuce', 1),
          new Ingredient('tomato', 2),
          new Ingredient('onion', 2)
        ])
  ];

  constructor(private SlService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index]
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.SlService.addIngredients(ingredients);
  }

}
