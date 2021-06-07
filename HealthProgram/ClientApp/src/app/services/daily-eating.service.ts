import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { EatingReport } from '../Model/eating-report.model';

@Injectable({
  providedIn: 'root'
})
export class DailyEatingService {

  constructor(private http: HttpClient,
    @Inject('URL_API') private baseUrl:string) { }

  readonly baseURL = this.baseUrl + 'api/EatingReports';

  public formData: EatingReport = new EatingReport();

  list: EatingReport[];

  postEatingReport() {
    const headers_ = {'Content-Type': 'application/json'};
    return this.http.post(this.baseURL, this.formData,{'headers':headers_});
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
