import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-food',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './manage-food.component.html',
  styleUrl: './manage-food.component.css',
})
export class ManageFoodComponent {
  food: any = {}; // Objeto para almacenar los datos del alimento

  saveFood() {
    // Lógica para guardar el alimento (ejemplo)
    console.log('Guardando alimento:', this.food);
    // Aquí podrías enviar los datos del alimento al backend para su almacenamiento
  }
}
