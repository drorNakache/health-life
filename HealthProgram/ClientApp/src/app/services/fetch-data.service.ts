import { PersonDetail } from './../Model/person-detail.model';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeightReport } from '../Model/weight-report.model';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  weightList:WeightReport[];
 personDetail:PersonDetail[];
  constructor(private http: HttpClient,
    @Inject('URL_API') private baseUrl:string) { }
    readonly baseURL = this.baseUrl + 'api/WeightReports';
readonly personUrl =this.baseUrl + 'api/PersonDetail';


  getPerson(id:string):Observable<any> {
    return this.http.get(`${this.baseUrl}${"Person/Get/" + id}`);
  }


  getWeightList(_username:string):Observable<any>{
    return this.http.get(this.baseURL);
  } 

  getPersonDetail(_username:string):Observable<any>{
    return this.http.get(this.personUrl);

  } 
}
