import { Component } from '@angular/core';
import { Food } from '../model/food.model';
import { FoodService } from '../food.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './food-catalog.component.html',
  styleUrl: './food-catalog.component.css',
})
export class FoodCatalogComponent {
  foods: Food[] = [];
  cartItemCount: number = 0;

  constructor(private foodService: FoodService, private router: Router) {
    this.loadFoods();
    this.loadCartItemCount();
  }

  loadCartItemCount() {
    // Obtener el valor del Local Storage
    const cartItemsString = sessionStorage.getItem('cartItems');

    // Verificar si el valor devuelto no es nulo
    if (cartItemsString !== null) {
      // Convertir el valor a un array de productos
      const cartItems = JSON.parse(cartItemsString);

      // Actualizar el contador de productos en el carrito
      this.cartItemCount = cartItems.length;
    } else {
      // Si el valor es nulo, establecer el contador en 0
      this.cartItemCount = 0;
    }
  }

  loadFoods() {
    this.foodService.getFoods().subscribe((foods) => (this.foods = foods));
  }

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
    this.cartItemCount++;
    // Obtener los productos del sessionStorage
    const cartItemsString = sessionStorage.getItem('cartItems');
    // Verificar si el valor devuelto no es null
    if (cartItemsString !== null) {
      // Convertir el valor a un array de productos
      const cartItems = JSON.parse(cartItemsString);
      // Agregar el nuevo producto al array
      cartItems.push(food);
      // Actualizar el valor en el sessionStorage
      sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
    } else {
      // Si el valor es null, crear un nuevo array con el producto y guardarlo en el sessionStorage
      sessionStorage.setItem('cartItems', JSON.stringify([food]));
    }
  }
  // Función para mostrar el carrito al hacer clic en el icono del carrito
  showCart() {
    this.router.navigate(['/shopping-cart']);
  }
}
