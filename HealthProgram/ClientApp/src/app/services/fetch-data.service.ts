import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor(private http: HttpClient,
    @Inject('URL_API') private baseUrl:string) { }


  getPerson(id:string):Observable<any> {
    return this.http.get(`${this.baseUrl}${"Person/Get/" + id}`);
  }


  


}
