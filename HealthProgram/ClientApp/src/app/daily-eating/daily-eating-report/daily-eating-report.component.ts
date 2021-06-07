import { EatingReport } from 'src/app/Model/eating-report.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DailyEatingService } from 'src/app/services/daily-eating.service';
import { MealType } from 'src/app/Model/meal-type.model';

@Component({
  selector: 'app-daily-eating-report',
  templateUrl: './daily-eating-report.component.html',
  styleUrls: ['./daily-eating-report.component.css']
})
export class DailyEatingReportComponent implements OnInit {

  constructor(public service:DailyEatingService) { }
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

  insertRecord(form: NgForm) {
    this.service.postEatingReport().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => { console.log(err); }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putEatingReport().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => { console.log(err); }
    );
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new EatingReport();
  }


}
