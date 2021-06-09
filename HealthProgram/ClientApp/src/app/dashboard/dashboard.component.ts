import { EatGoalService } from './../services/eat-goal.service';
import { Component, OnInit } from '@angular/core';
import { EatDetailService } from '../services/eat-detail.service';
import { NgForm } from '@angular/forms';
import { EatDetail } from '../Model/eat-detail.model';
import { AuthorizeService } from 'src/api-authorization/authorize.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  constructor(public eatService: EatDetailService, public goalService:EatGoalService,private userMangment:AuthorizeService) { }

dailyCalories: number=0;
avgDailyCalories: number;
  ngOnInit() {

    this.userMangment.getUser().pipe(map(u => u && u.name)).subscribe(
      x=>{

        this.goalService.getList(x).subscribe(
          x => {
            this.goalService.list = x as EatDetail[];
    
    
            
        if(this.goalService.list.length > 0)
        {
          var min:Date = this.goalService.list[0].eatDate;
    
          //FInd the minimum date
          this.goalService.list.forEach(e => {
            if(e.eatDate < min)
            {
              min = e.eatDate;
            }
          });
    
          //Find the minimum reports of the minimum date
          this.goalService.list.forEach(e => {
            if(e.eatDate == min)
            {
              this.dailyCalories+= (e.calories*e.unit);
    
            }
          });
        }
        },
        err=>{
    
        });

      });
   

 
    this.eatService.list.sort((a,b)=>(a.eatDate.getDate()-b.eatDate.getDate()));
   // const sorted=this.eatService.list.slice().((a,b)=>(a.eatDate.getDate()==b.eatDate.getDate()));

  
  }
sumdailyCalories(){

}






}
