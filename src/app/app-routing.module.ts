import { NavAppComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'/login' ,pathMatch:'full'},
  {path:'checkout',component: CheckoutComponent},
  {path :'home' , loadChildren : ()=> import('src/app/home/home.module').then(m => m.HomeModule)},
  {path:'login' ,component: LoginComponent},
  {path : 'nav' ,component : NavAppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
