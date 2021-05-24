import { PushDataService } from './../services/push-data.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PersonDetail } from '../Model/person-detail.model';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
  
  person:PersonDetail;
  isSucceed: boolean = null;
  
  constructor(private PushDataService:PushDataService) 
  { 
    this.person = new PersonDetail();
  }


  ngOnInit() {
  }

  public onSubmit(form: NgForm)
  {
    this.person.privateName = form.value["privateName"];
    this.person.lastName = form.value["lastName"];
    this.person.height = form.value["height"];
    this.person.weight = form.value["weight"];
    this.person.dateOfBirth = form.value["dateOfBirth"];

    this.PushDataService.postPersonDetail(this.person).subscribe(
    x=>{
      this.isSucceed = true;
    },

    err=>{
      this.isSucceed = false;
    }
    );


  }

}
