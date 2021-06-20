import { EatDetailService } from './../../services/eat-detail.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { EatDetail } from 'src/app/Model/eat-detail.model';
import { MealType } from 'src/app/Model/meal-type.model';
import { ApiService } from 'src/app/services/api.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-eat-detail-form',
  templateUrl: './eat-detail-form.component.html',
  styles: []
})
export class EatDetailFormComponent implements OnInit {
  formControl = new FormControl();
  autoFilter: Observable<string[]>;
  Items: string[] = ['BoJack Horseman', 'Stranger Things', 'Ozark', 'Big Mouth'];

  constructor(public service:EatDetailService,private apiService: ApiService) { }
  mealType:MealType;
  mealTypeString:string;
  mySelect = '2';
  selectedValue: any;
  foodList;
  
  ngOnInit() {

    this.apiService.getFoodList().subscribe((data)=>{
      alert("geting new data from FOOD-API...");
      this.foodList = data;
      
    });

  

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
    this.service.postEatDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => { console.log(err); }
    )
  }


  
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new EatDetail();
  }
  getDropDownText(fdcId, object){
/*     const selObj = _.filter(object, function (o) {
        return (_.includes(id,o.id));
    });
    return selObj; */

return alert(fdcId);



  }
  selectChange() {
    this.selectedValue = this.getDropDownText(this.mySelect, this.foodList)[0].description;
}




}
