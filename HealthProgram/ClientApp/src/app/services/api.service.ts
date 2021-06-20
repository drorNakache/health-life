import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getFoodList(){
    return this.httpClient.get('https://api.nal.usda.gov/fdc/v1/foods/list?api_key=34PWmJksQd0chnfxrmjDXVot5CYiIzjdgUj9LCHP');
  }


}
