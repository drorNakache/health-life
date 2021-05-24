import { async } from '@angular/core/testing';
import { PushDataService } from '../services/push-data.service';
import { Component, OnInit } from '@angular/core';
import { DailyGoal } from '../Model/daily-goal.model';
import { NgForm } from '@angular/forms';
import { Food } from '../Model/food.model';
import { Meal } from '../Model/meal.model';
import { AuthorizeService } from 'src/api-authorization/authorize.service';
import { User } from '../Model/User';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FetchDataService } from '../services/fetch-data.service';
import { Person } from '../Model/person.model';

@Component({
  selector: 'app-add-daily-goal',
  templateUrl: './add-daily-goal.component.html',
  styleUrls: ['./add-daily-goal.component.css']
})
export class AddDailyGoalComponent implements OnInit {

dailygoal:DailyGoal;
isSucceed: boolean = null;
date:Date=new Date();
personId:number;
breakfast:Meal = new Meal();
launch:Meal = new Meal();
dinner:Meal = new Meal();
snacks:Meal = new Meal();
person:Person = new Person();

public userName: Observable<string>;

  constructor(private PushDataService:PushDataService,
     private userMangment:AuthorizeService,
     private featchData:FetchDataService) {  


  }

  ngOnInit() {

    let id ="";
    this.userName = this.userMangment.getUser().pipe(map(u => u && u.name));
    this.userName.subscribe(x=>{

      id = x;
    })
    this.featchData.getPerson(id).subscribe(
      x=>{
        this.person = x;
      }
      ,
      err=>{
        
      }
    );

    

}

onBreakFastSubmit(form: NgForm){
  var food = new Food();
  food.name =  form.value["name"];
  food.calories= form.value["calories"];
  food.Unit=  form.value["Unit"];

  this.breakfast.foods.push(food);
}

onLaunchSubmit(form: NgForm){
  var food = new Food();
  food.name =  form.value["name"];
  food.calories= form.value["calories"];
  food.Unit=  form.value["Unit"];

  this.launch.foods.push(food);

}

onDinnerSubmit(form: NgForm){
  var food = new Food();
  food.name =  form.value["name"];
  food.calories= form.value["calories"];
  food.Unit=  form.value["Unit"];

  this.dinner.foods.push(food);

}
onSnacksSubmit(form: NgForm){
  var food = new Food();
  food.name =  form.value["name"];
  food.calories= form.value["calories"];
  food.Unit=  form.value["Unit"];
  
  this.snacks.foods.push(food);

}
submitGoal(){

  this.dailygoal=new DailyGoal(this.person.id,this.date,this.breakfast,this.launch,this.dinner,this.snacks);

  this.PushDataService.postDailyGoal(this.dailygoal).subscribe(
    x=>{
      this.isSucceed = true;
    },

    err=>{
      this.isSucceed = false;
    }
    );


  

}
  


}
