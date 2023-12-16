import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { EjemploComponent } from './pages/ejemplo/ejemplo.component';
import { HomeComponent } from './pages/home/home.component';
import { OfertasComponent } from './pages/ofertas/ofertas.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { TerminosComponent } from './pages/terminos/terminos.component';
import { Error404Component } from './pages/error404/error404.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [

  {path:"acercade",component: AcercadeComponent},
  {path:"carrito",component: CarritoComponent},
  {path:"contacto",component: ContactoComponent},
  {path:"detalles/:id",component: DetalleComponent},
  {path:"ejemplo",component: EjemploComponent},
  {path:"",component: HomeComponent},
  {path:"ofertas",component: OfertasComponent},
  {path:"productos",component: ProductosComponent},
  {path:"terminos",component: TerminosComponent},
  {path:"login",component: LoginComponent},

  {path:"**",component: Error404Component},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
