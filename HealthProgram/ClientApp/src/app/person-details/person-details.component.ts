import { PushDataService } from './../services/push-data.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PersonDetail } from '../Model/person-detail.model';
import { AuthorizeService } from 'src/api-authorization/authorize.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
  
  person:PersonDetail;
  isSucceed: boolean = null;

  
  constructor(private PushDataService:PushDataService,
    private userMangment:AuthorizeService,
    ) 
  { 
    this.person = new PersonDetail();
  }


  ngOnInit() {
  }

  public onSubmit(form: NgForm)
  {
    this.userMangment.getUser().pipe(map(u => u && u.name)).subscribe(x=>{
      this.person.privateName = form.value["privateName"];
      this.person.lastName = form.value["lastName"];
      this.person.height = form.value["height"];
      this.person.weight = form.value["weight"];
      this.person.dateOfBirth = form.value["dateOfBirth"];
      this.person.personId = x;
  
      this.PushDataService.postPersonDetail(this.person).subscribe(
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
