import { Component, OnInit } from '@angular/core';
import { MealType } from '../Model/meal-type.model';
import { EatGoalService } from '../services/eat-goal.service';

@Component({
  selector: 'app-eat-goal',
  templateUrl: './eat-goal.component.html',
  styles: []
})
export class EatGoalComponent implements OnInit {

  constructor(public service: EatGoalService) { }

  ngOnInit() {

    this.service.refreshList();
    
  }

  populateForm(selectedRecord) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id:number) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deleteEatDetail(id)
        .subscribe(res => {
          this.service.refreshList();
        },
        err => { console.log(err); })
    }
  }
  
  convartMealName(m:MealType)
  {
    switch (m)
    { 
      case MealType.BreakFast:
        return "Breakfast";
      case MealType.Luanch:
       return "Luanch";
       case MealType.Dinner:
        return "Dinner";
        case MealType.Snacks:
          return "Snacks";

      default:
         return "";

    }
  }
  }


