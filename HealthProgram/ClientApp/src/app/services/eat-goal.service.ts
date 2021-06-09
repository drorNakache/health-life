import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EatDetail } from '../Model/eat-detail.model';

@Injectable({
  providedIn: 'root'
})
export class EatGoalService {

  formData: EatDetail= new EatDetail();
  list : EatDetail[] ;


  constructor(private http: HttpClient,
    @Inject('URL_API') private baseUrl:string) { }

    readonly baseURL = this.baseUrl + 'api/EatGoal';


    postEatDetail(_username:string) {

      this.formData.personId = _username;
      return this.http.post(this.baseURL, this.formData);

    }
    putEatDetail() {
      return this.http.put(`${this.baseURL}/${this.formData.id}`, this.formData);
    }
    deleteEatDetail(id: number) {
      return this.http.delete(`${this.baseURL}/${id}`);
    }
  
    getList(_username:string):Observable<any>{
      return this.http.get(`${this.baseURL +'/GetAll'}/${123}`);
    }

    refreshList() {
      this.http.get(this.baseURL)
        .toPromise()
        .then(res =>this.list = res as EatDetail[]);
    }
}
