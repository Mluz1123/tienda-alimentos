import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css',
})
export class UserLoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Lógica de autenticación de usuario (simplificada)
    if (this.username === 'usuario' && this.password === '1234') {
      // Redirigir a la página de catálogo de alimentos
      this.router.navigate(['/food-catalog']);
    } else {
      alert('Nombre de usuario o contraseña incorrectos');
    }
  }
}
