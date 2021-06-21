import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',

  styles: [
  ]
})
export class FoodListComponent implements OnInit {



 
  constructor(private apiService: ApiService) { }

  foodList;
  
  ngOnInit(): void {
    

    this.apiService.getFoodList().subscribe((data)=>{
      alert("geting new data from FOOD-API...");
      this.foodList = data;
   
    });

  }

}
