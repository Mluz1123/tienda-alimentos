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

  constructor(private cartService: CartService) {}

  ngOnInit() {
    // Suscribirse al BehaviorSubject del CartService para obtener cambios en el carrito
    this.cartService.getCart().subscribe((cart) => {
      this.cart = cart; // Actualizar el contenido del carrito
    });
  }
}
