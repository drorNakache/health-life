import { Component, OnInit } from '@angular/core';
import { EatingReport } from '../Model/eating-report.model';
import { DailyEatingService } from '../services/daily-eating.service';

@Component({
  selector: 'app-daily-eating',
  templateUrl: './daily-eating.component.html',
  styleUrls: ['./daily-eating.component.css']
})
export class DailyEatingComponent implements OnInit {

  constructor(public service: DailyEatingService) { }

  ngOnInit() {
    this.service.refreshList();

  }

  populateForm(selectedRecord: EatingReport) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteEatingReport(id)
        .subscribe(
          res => {
            this.service.refreshList();
          },
          err => { console.log(err) }
        )
    }
  }

}
