import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { PersonDetail } from '../Model/person-detail.model';
import { DailyGoal } from '../Model/daily-goal.model';

@Injectable({
  providedIn: 'root'
})
export class PushDataService {

  constructor(private http: HttpClient,
    @Inject('URL_API') private baseUrl:string) { }


  postPersonDetail(person:PersonDetail):Observable<any> {

    const headers_ = {'Content-Type': 'application/json'};
    const data = JSON.stringify(person);


    return this.http.post(`${this.baseUrl}${"Person/create"}`,data,{'headers':headers_});
  }

  
  postDailyGoal(dailygoal:DailyGoal):Observable<any> {

    const headers_ = {'Content-Type': 'application/json'};
    const data = JSON.stringify(dailygoal);


    return this.http.post(`${this.baseUrl}${"PersonGoals/create"}`,data,{'headers':headers_});
  }
}
