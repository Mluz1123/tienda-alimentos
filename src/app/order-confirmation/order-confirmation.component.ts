import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Food } from '../model/food.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-order-confirmation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-confirmation.component.html',
  styleUrl: './order-confirmation.component.css',
})
export class OrderConfirmationComponent implements OnInit {
  cart: Food[] = []; // Arreglo para almacenar los alimentos en el carrito

  constructor() {}

  ngOnInit() {
    this.loadOrder();
  }

  loadOrder() {
    const cartItemsString = sessionStorage.getItem('cartItems');
    if (cartItemsString !== null) {
      this.cart = JSON.parse(cartItemsString);
    }
  }
}
