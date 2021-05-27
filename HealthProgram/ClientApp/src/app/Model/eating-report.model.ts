import { Food } from "./food.model";
import { MealType } from "./meal-type.model";

export class EatingReport {
    dailyGoalId:number=0;
    personId:number=0;
    eatingDate:Date=new Date();
    reportDate:Date=new Date();
    foodsReport: Array<Food>=new Array<Food>();
    mealType:MealType;
}
