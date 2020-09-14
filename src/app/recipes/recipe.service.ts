import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model'
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable(

)
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe('Tasty Schnitzel','This is simply a test'
        ,'https://isastudentblog.files.wordpress.com/2018/03/shnitzel.jpg',
        [
            new Ingredient('Meat',1),
            new Ingredient('French Fries',20)
        ]),
        new Recipe('Pizza','This is another simply a test'
        ,'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/3:2/w_2560,c_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg',
        [])
      ];

    constructor(private slService:ShoppingListService)
    {}

    getRecipes() {
        return this.recipes.slice(); //new array of recipes which is a copy to recipes
    }

    addIngredientToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
    
}