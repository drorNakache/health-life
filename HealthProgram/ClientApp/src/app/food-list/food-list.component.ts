import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CompleterService, CompleterData } from 'ng2-completer';


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  template: `<h1>Search  </h1>
  <ng2-completer [(ngModel)]="searchStr" [datasource]="dataService" [minSearchLength]="1"></ng2-completer>`,
  styles: [
  ]
})
export class FoodListComponent implements OnInit {

  public searchStr: string;
   public dataService: CompleterData;
  public searchData = [
    { color: 'red', value: '#f00' },
    { color: 'green', value: '#0f0' },
    { color: 'blue', value: '#00f' },
    { color: 'cyan', value: '#0ff' },
    { color: 'magenta', value: '#f0f' },
    { color: 'yellow', value: '#ff0' },
    { color: 'black', value: '#000' }
  ];

 
  constructor(private apiService: ApiService,private completerService:CompleterService) { }

  foodList;
  
  ngOnInit(): void {
    

    this.apiService.getFoodList().subscribe((data)=>{
      alert("geting new data from FOOD-API...");
      this.foodList = data;
      this.dataService = this.foodList;
    });

  }

}
