import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EatingReport } from '../Model/eating-report.model';

@Injectable({
  providedIn: 'root'
})
export class DailyEatingService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'http://localhost:44367/api/EatingReports'
  formData: EatingReport = new EatingReport();
  list: EatingReport[];

  postEatingReport() {
    return this.http.post(this.baseURL, this.formData);
  }

  putEatingReport() {
    return this.http.put(`${this.baseURL}/${this.formData.id}`, this.formData);
  }

  deleteEatingReport(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as EatingReport[]);
  }
}
