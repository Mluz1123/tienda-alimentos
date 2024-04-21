import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from './model/food.model';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  private apiUrl = 'https://apimocha.com/tiendaalimentos/products';

  constructor(private http: HttpClient) {}

  getFoods(): Observable<Food[]> {
    return this.http.get<Food[]>(this.apiUrl);
  }

  addToCart(food: Food) {
    // Lógica para agregar un alimento al carrito
    console.log('Agregando alimento al carrito:', food);
  }
}
