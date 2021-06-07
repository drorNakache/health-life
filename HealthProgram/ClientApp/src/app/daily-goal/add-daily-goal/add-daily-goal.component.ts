import { waitForAsync } from '@angular/core/testing';
 import { Component, OnInit } from '@angular/core';
 import { NgForm } from '@angular/forms';
 import { AuthorizeService } from 'src/api-authorization/authorize.service';
 import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DailyGoal } from 'src/app/Model/daily-goal.model';
import { Meal } from 'src/app/Model/meal.model';
import { Person } from 'src/app/Model/person.model';
import { FetchDataService } from 'src/app/services/fetch-data.service';
 import {PushDataService } from 'src/app/services/push-data.service';
import { Food } from 'src/app/Model/food.model';
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

    this.userName = this.userMangment.getUser().pipe(map(u => u && u.name));
    this.userName.subscribe(x=>{

      this.featchData.getPerson(x).subscribe(
        y=>{
          this.person = y;
        }
        ,
        err=>{
          
        }
      );
    })
 

    
}

onBreakFastSubmit(form: NgForm){
  var food = new Food();
  food.name =  form.value["name"];
  food.calories= form.value["calories"];
  food.unit=  form.value["unit"];

  this.breakfast.foods.push(food);
}

onLaunchSubmit(form: NgForm){
  var food = new Food();
  food.name =  form.value["name"];
  food.calories= form.value["calories"];
  food.unit=  form.value["unit"];

  this.launch.foods.push(food);

}

onDinnerSubmit(form: NgForm){
  var food = new Food();
  food.name =  form.value["name"];
  food.calories= form.value["calories"];
  food.unit=  form.value["unit"];

  this.dinner.foods.push(food);

}
onSnacksSubmit(form: NgForm){
  var food = new Food();
  food.name =  form.value["name"];
  food.calories= form.value["calories"];
  food.unit=  form.value["unit"];
  
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
