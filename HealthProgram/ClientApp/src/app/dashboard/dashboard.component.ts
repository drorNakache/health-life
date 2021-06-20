import { EatDetail } from './../Model/eat-detail.model';
import { PersonDetail } from './../Model/person-detail.model';
import { WeightReport } from './../Model/weight-report.model';
import { EatGoalService } from './../services/eat-goal.service';
import { Component, OnInit } from '@angular/core';
import { EatDetailService } from '../services/eat-detail.service';
import { NgForm } from '@angular/forms';
import { AuthorizeService } from 'src/api-authorization/authorize.service';
import { map } from 'rxjs/operators';
import { PushDataService } from '../services/push-data.service';
import { MLModel } from '../Model/MLModel';
import { FetchDataService } from '../services/fetch-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  constructor(public eatService: EatDetailService,
     public goalService:EatGoalService,
     private userMangment:AuthorizeService,
     public pushDataService:PushDataService,
     public fetchDataService:FetchDataService,
     ) { }
output:number =0;
dailyCalories: number=0;
avgDailyCalories: number;
lastWeightReport: number=0;
OneBeforelastWeightReport: number=0;
lastWeightReportDate:Date;

  heightSquared: number=0;
  BMI:number=0;
  sortEatList : EatDetail[] ;
  ngOnInit() {

    //this.goalService.refreshList();


      
    

    this.userMangment.getUser().pipe(map(u => u && u.name)).subscribe(
      x=>{

        

//------weight data---------
this.fetchDataService.getWeightList(x).subscribe(
  w=>{
  this.fetchDataService.weightList= w as WeightReport[];
  //alert(this.fetchDataService.weightList[0].weightMeasure);
  if(this.fetchDataService.weightList.length > 0)
  {
    var max:Date = this.fetchDataService.weightList[0].dateReport;
    var max2:Date=max;
  }
    //FInd the last weight -report
    this.fetchDataService.weightList.forEach(w => {
      if((w.dateReport > max))
      {
        max2=max;
        max = w.dateReport;

      }
    });

    this.lastWeightReportDate=max;

      this.fetchDataService.weightList.forEach(w =>{
       if (w.dateReport==max)
       {
        this.lastWeightReport=w.weightMeasure;
      
        }
        if(w.dateReport==max2)
        {  this.OneBeforelastWeightReport=w.weightMeasure;}
      });

       //-------get height of person data -----------


       this.fetchDataService.getPersonDetail(x).subscribe(
        w=>{
        this.fetchDataService.personDetail= w as PersonDetail[];
        this.heightSquared=(w[0].height)

          this.heightSquared=
          Math.pow(this.heightSquared,2);

          this.BMI=Math.round(this.lastWeightReport/this.heightSquared);
        });
    });

     //-----------Calculate AVG EatDetail--------------------------------
/* 
     this.eatService.getEatList(x).subscribe(
       x=>{
            this.eatService.list = x as EatDetail[];
          
            if(this.goalService.list.length > 0)
            {
              let i:number =0;
              this.goalService.list.forEach(e => {
                
                this.goalService.list.forEach(e2 => {
                  if(e.eatDate==e2.eatDate)
                  { 
                    if (e)
                    this.sortEatList[i].calories=this.sortEatList[i].calories+
                    
                  }
                })
                i=i+1;
              })
            }

       }
     ) */
          
//------------------------Machine Learning Calculate--------

        this.goalService.getList(x).subscribe(
          x => {
            this.goalService.list = x as EatDetail[];



            let mlModel = new MLModel();
            //mlModel.calories_eat_change=1000;
            mlModel.calorie_for_KG=400;
            mlModel.Weekly_weight_change=1.2;

              if(this.goalService.list.length > 1)
              {

                var max:Date = this.goalService.list[0].eatDate;
                var max2:Date=max;
                //FInd the last date
                this.goalService.list.forEach(e => {
                  if((e.eatDate > max))
                  {
                    max2=max;
                    max = e.eatDate;
  
                  }
                });
              }

                let c1:number=0;
                let c2:number=0;
                this.goalService.list.forEach(e => {
                  if(e.eatDate == max)
                  {
                    c1 += (e.calories*e.unit);

                  }
                  else if(e.eatDate == max2)
                  {
                    c2 += (e.calories*e.unit);

                  }
                });

                mlModel.calories_eat_change=(c1-c2);
                

                this.pushDataService.postML(mlModel).subscribe(
                  m=>{
                  this.output=m.toFixed(2);
                  
                  });
                  
                });
          
                });}; };
