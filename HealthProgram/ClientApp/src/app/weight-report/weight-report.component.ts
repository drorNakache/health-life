import { FetchDataService } from './../services/fetch-data.service';
import { WeightReport } from './../Model/weight-report.model';
import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from 'src/api-authorization/authorize.service';
import { NgForm } from '@angular/forms';
import { PersonDetail } from '../Model/person-detail.model';
import { PushDataService } from '../services/push-data.service';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-weight-report',
  templateUrl: './weight-report.component.html',
  styleUrls: ['./weight-report.component.css']
})
export class WeightReportComponent implements OnInit {

  weightReport:WeightReport;
  person:PersonDetail;
  isSucceed: boolean = null;

  constructor(private PushDataService:PushDataService,
    private userMangment:AuthorizeService,private _FetchDataService:FetchDataService
    ) 
  { 
    this.weightReport = new WeightReport();

  }
  ngOnInit() {

    this.userMangment.getUser().pipe(map(u => u && u.name)).subscribe(
      x=>{

      this._FetchDataService.getPerson(x).subscribe(
        y=>{ 

        },
        err=>{ 

        }

      );

    },
    err=>{ 

    }
    );
     

    
 

  }


  public onSubmit(form: NgForm)
  {
    this.userMangment.getUser().pipe(map(u => u && u.name)).subscribe(x=>{
      this.weightReport.WeightMeasure = form.value["weightMeasure"];
      this.weightReport.dateReport = form.value["dateReport"];
    
  


      this.PushDataService.postWeightReport(this.weightReport,x).subscribe(
      x=>{
        this.isSucceed = true;
      },
  
      err=>{
        this.isSucceed = false;
      }
      );


    })

  


  }
}
