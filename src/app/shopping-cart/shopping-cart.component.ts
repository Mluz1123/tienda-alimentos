import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Food } from '../model/food.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css',
})
export class ShoppingCartComponent implements OnInit {
  cart: Food[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    const cartItemsString = sessionStorage.getItem('cartItems');
    if (cartItemsString !== null) {
      this.cart = JSON.parse(cartItemsString);
    }
  }

  calculateTotal() {
    let total = 0;
    for (const item of this.cart) {
      total += item.price * item.quantity;
    }
    return total;
  }

  removeFromCart(item: Food) {
    // Eliminar el producto del carrito
    this.cart = this.cart.filter((cartItem) => cartItem.id !== item.id);
    // Actualizar el sessionStorage
    sessionStorage.setItem('cartItems', JSON.stringify(this.cart));
  }

  checkout() {
    console.log('Pedido realizado:', this.cart);

    this.router.navigate(['/order-confirmation']);

    // Aquí puedes implementar la lógica para enviar el pedido al backend y guardar en la base de datos
    // Luego, puedes redirigir al usuario a la página de confirmación de pedido
  }
}
