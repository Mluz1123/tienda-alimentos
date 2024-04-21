import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Food } from '../model/food.model';

@Component({
  selector: 'app-list-foods',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-foods.component.html',
  styleUrl: './list-foods.component.css',
})
export class ListFoodsComponent {
  foods: Food[] = [
    {
      id: 1,
      name: 'Manzana',
      description: 'Fruta fresca',
      price: 1.5,
      quantity: 10,
      img: 'https://img.freepik.com/foto-gratis/vista-frontal-manzanas-rojas-frescas-frutas-maduras-suaves-escritorio-blanco-arbol-color-fruta-planta-fresca-roja_140725-110203.jpg?t=st=1713649855~exp=1713653455~hmac=d31d8823ddd00da979d94a80fafb356fd81234beb81d4ed0947fab86e121fad3&w=1800',
    },
    {
      id: 2,
      name: 'Plátano',
      description: 'Fruta tropical',
      price: 2,
      quantity: 15,
      img: 'https://img.freepik.com/foto-gratis/vista-frontal-cercana-deliciosos-platanos-comida-exotica_140725-23062.jpg?t=st=1713650006~exp=1713653606~hmac=c7d64893a4c94e7458de442bef4521eda537caba6ff23a94100c46b69d89d41a&w=1800',
    },
    {
      id: 3,
      name: 'Zanahoria',
      description: 'Verdura crujiente',
      price: 1,
      quantity: 20,
      img: 'https://img.freepik.com/foto-gratis/pila-zanahorias-cuenco-sobre-marmol_114579-65075.jpg?t=st=1713650061~exp=1713653661~hmac=03161d3e8608363e0561996184d89b326fa66be31a018d46b0ca6939976c1284&w=1800',
    },
  ];
  editFood(food: Food) {
    // Lógica para editar un alimento
    console.log('Editando alimento:', food);
  }

  deleteFood(food: Food) {
    // Lógica para eliminar un alimento
    console.log('Eliminando alimento:', food);
  }
}
