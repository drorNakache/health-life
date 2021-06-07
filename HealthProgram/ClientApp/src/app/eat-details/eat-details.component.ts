import { Component, OnInit } from '@angular/core';
import { MealType } from '../Model/meal-type.model';
import { EatDetailService } from '../services/eat-detail.service';

@Component({
  selector: 'app-eat-details',
  templateUrl: './eat-details.component.html',
  styles: []
})
export class EatDetailsComponent implements OnInit {

  constructor(public service: EatDetailService) { }

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
