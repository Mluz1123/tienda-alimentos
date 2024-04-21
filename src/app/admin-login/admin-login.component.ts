import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css',
})
export class AdminLoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Lógica de autenticación de administrador (simplificada)
    if (this.username === 'admin' && this.password === 'admin123') {
      // Redirigir a la página de gestión de alimentos
      this.router.navigate(['/manage-food']);
    } else {
      alert('Nombre de usuario o contraseña incorrectos');
    }
  }
}
