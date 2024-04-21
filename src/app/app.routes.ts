import { Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { ManageFoodComponent } from './manage-food/manage-food.component';
import { FoodCatalogComponent } from './food-catalog/food-catalog.component';
import { ListFoodsComponent } from './list-foods/list-foods.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirige a la ruta de inicio de sesión por defecto
  { path: 'login', component: UserLoginComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'manage-food', component: ManageFoodComponent },
  { path: 'food-catalog', component: FoodCatalogComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'order-confirmation', component: OrderConfirmationComponent },
  { path: 'list-food', component: ListFoodsComponent },
];
