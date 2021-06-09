import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { AuthorizeService } from 'src/api-authorization/authorize.service';
import { EatDetail } from 'src/app/Model/eat-detail.model';
import { MealType } from 'src/app/Model/meal-type.model';
import { EatGoalService } from 'src/app/services/eat-goal.service';

@Component({
  selector: 'app-eat-goal-form',
  templateUrl: './eat-goal-form.component.html',
  styles: []
})
export class EatGoalFormComponent implements OnInit {



  constructor(public service:EatGoalService,private userMangment:AuthorizeService) { }
  mealType:MealType;
  mealTypeString:string;
  ngOnInit() {
  }
  onSubmit(form: NgForm) {


    switch (this.mealTypeString)
    { 
      case '0':
        this.mealType = MealType.BreakFast;
        break;  
      case '1':
        this.mealType = MealType.Luanch;
        break;
        case '2':
        this.mealType = MealType.Dinner;
        break;
        case '3':
          this.mealType = MealType.Snacks;
          break;
      default:
         break;

    }

    this.service.formData.mealType = this.mealType;
    
    if (this.service.formData.id == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }
  
  updateRecord(form: NgForm) {
    this.service.putEatDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }
  
  insertRecord(form: NgForm) {

    this.userMangment.getUser().pipe(map(u => u && u.name)).subscribe(
      x=>{

        this.service.postEatDetail(x).subscribe(
          res => {
            this.resetForm(form);
            this.service.refreshList();
          },
          err => { console.log(err); }
        )

      }
      
      );

   


  }


  
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new EatDetail();
  }



}
