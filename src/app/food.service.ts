import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Food } from './model/food.model';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  // private apiUrl = 'https://apimocha.com/tiendaalimentos/products';

  // constructor(private http: HttpClient) {}

  // getFoods(): Observable<Food[]> {
  //   return this.http.get<Food[]>(this.apiUrl);
  // }

  // Define tus datos de prueba aquí
  private testData: Food[] = [
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
    {
      id: 4,
      name: 'Arroz',
      description: 'Arroz blanco',
      price: 18.5,
      quantity: 50,
      img: 'https://img.freepik.com/foto-gratis/saco-arroz-arroz-cuchara-madera-planta-arroz_1150-34312.jpg?t=st=1713650141~exp=1713653741~hmac=91bfc3015d4645f4f21a959003007c23b714752ee5d404aed3267214b870c369&w=1800',
    },
    {
      id: 5,
      name: 'Aceite',
      description: 'Aceite vegetal',
      price: 21,
      quantity: 100,
      img: 'https://img.freepik.com/foto-gratis/aceite-soja-productos-alimenticios-bebidas-soja-concepto-nutricion-alimentaria_1150-26352.jpg?t=st=1713650190~exp=1713653790~hmac=1012b4cee438e88da59a86085bbba999f7a063a7c7fb70c06992eaa4af1c6e2c&w=740',
    },
    {
      id: 6,
      name: 'Margarina',
      description: 'Margarina original',
      price: 15.4,
      quantity: 200,
      img: 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQPwuwTuSsIAylesbRyrmnvt-N5qsFIaydkJaevFjxTgS_XsTHh6kQ2XBuFkqNe9_9Vy9jVBkJwDx4iVrNNYSg',
    },
  ];

  constructor() {}

  getFoods(): Observable<Food[]> {
    // Devuelve los datos de prueba como un observable
    return of(this.testData);
  }

  addToCart(food: Food) {
    // Lógica para agregar un alimento al carrito
    console.log('Agregando alimento al carrito:', food);
  }
}
