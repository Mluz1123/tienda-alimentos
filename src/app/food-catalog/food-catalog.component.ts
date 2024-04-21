import { Component } from '@angular/core';
import { Food } from '../model/food.model';
import { FoodService } from '../food.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-food-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './food-catalog.component.html',
  styleUrl: './food-catalog.component.css',
})
export class FoodCatalogComponent {
  foods: any[] = [];

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    this.getFoods();
  }

  getFoods() {
    this.foodService.getFoods().subscribe((data: any[]) => {
      this.foods = data;
    });
  }

  addToCart(food: Food) {
    this.foodService.addToCart(food);
  }
}
