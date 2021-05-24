import { Food } from "./food.model";

export class Meal {

    constructor(){
        this.foods = new Array();
    }

    foods: Array<Food>;
}
