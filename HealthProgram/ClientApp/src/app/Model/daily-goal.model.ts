import { Meal } from "./meal.model";

export class DailyGoal {

    constructor(personId,currentDate, breakFast,launch,dinner,snacks){
        this.currentDate = currentDate;
        this.breakFast = breakFast;
        this.launch = launch;
        this.dinner = dinner;
        this.snacks = snacks;
this.personId= personId;
    }
personId:number;
    currentDate:Date = new Date();
    breakFast:Meal;
    launch:Meal;
    dinner:Meal;
    snacks:Meal;

}
