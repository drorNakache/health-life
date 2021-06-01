import { EatingReport } from 'src/app/Model/eating-report.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DailyEatingService } from 'src/app/services/daily-eating.service';

@Component({
  selector: 'app-daily-eating-report',
  templateUrl: './daily-eating-report.component.html',
  styleUrls: ['./daily-eating-report.component.css']
})
export class DailyEatingReportComponent implements OnInit {

  constructor(public service:DailyEatingService) { }

  ngOnInit() {
  }
  
  onSubmit(form: NgForm) {
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
