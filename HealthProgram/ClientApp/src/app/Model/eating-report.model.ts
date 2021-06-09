import { Food } from "./food.model";
import { MealType } from "./meal-type.model";

export class EatingReport {
    id:number=0;
    dailyGoalId:number=0;
    personId:string='';
    eatingDate:Date=new Date();
    reportDate:Date=new Date();
    foodsReport: Array<Food>=new Array<Food>();
    mealType:MealType;
    //constructor(){this.eatingDate.getDate};
}
