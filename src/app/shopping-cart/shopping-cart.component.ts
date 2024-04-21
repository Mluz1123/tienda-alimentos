import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Food } from '../model/food.model';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css',
})
export class ShoppingCartComponent implements OnInit {
  cart: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.getCart();
  }

  getCart() {
    this.cartService.getCart().subscribe((cart) => {
      this.cart = cart;
    });
  }

  removeFromCart(item: Food) {
    this.cartService.removeFromCart(item);
    this.getCart(); // Actualiza el carrito después de eliminar un elemento
  }

  checkout() {
    // Lógica para realizar el pedido (puede ir en el servicio o aquí)
    console.log('Pedido realizado:', this.cart);
    // Aquí puedes implementar la lógica para enviar el pedido al backend y guardar en la base de datos
    // Luego, puedes redirigir al usuario a la página de confirmación de pedido
  }
}
