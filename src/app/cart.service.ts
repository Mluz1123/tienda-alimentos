import { Injectable } from '@angular/core';
import { Food } from './model/food.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Food[] = []; // Arreglo para almacenar los alimentos en el carrito
  private cartSubject = new BehaviorSubject<Food[]>([]); // BehaviorSubject para emitir cambios en el carrito

  constructor() {}

  addToCart(food: Food) {
    this.cart.push(food);
    this.cartSubject.next(this.cart); // Emitir cambios en el carrito
  }

  getCart(): BehaviorSubject<Food[]> {
    return this.cartSubject; // Devolver el BehaviorSubject para suscribirse a los cambios en el carrito
  }

  removeFromCart(food: Food) {
    const index = this.cart.indexOf(food);
    if (index > -1) {
      this.cart.splice(index, 1);
      this.cartSubject.next(this.cart);
    }
  }
}
