import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EatDetail } from '../Model/eat-detail.model';

@Injectable({
  providedIn: 'root'
})
export class EatDetailService {

  formData: EatDetail= new EatDetail();
  list : EatDetail[];


  constructor(private http: HttpClient,
    @Inject('URL_API') private baseUrl:string) { }

    readonly baseURL = this.baseUrl + 'api/EatDetail';


    postEatDetail() {
      return this.http.post(this.baseURL, this.formData);
    }
    putEatDetail() {
      return this.http.put(`${this.baseURL}/${this.formData.id}`, this.formData);
    }
    deleteEatDetail(id: number) {
      return this.http.delete(`${this.baseURL}/${id}`);
    }
  
    getEatList(_username:string):Observable<any>{
      return this.http.get(this.baseURL);
    } 

    refreshList() {
      this.http.get(this.baseURL)
        .toPromise()
        .then(res =>this.list = res as EatDetail[]);
    }
  }







    

