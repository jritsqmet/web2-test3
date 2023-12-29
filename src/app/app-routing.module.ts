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
import { RegistroComponent } from './pages/registro/registro.component';
import { loginGuard } from './guards/login.guard';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { AdminComponent } from './pages/admin/admin.component';
import { adminGuard } from './guards/admin.guard';

const routes: Routes = [

  {path:"acercade",component: AcercadeComponent},
  {path:"carrito",component: CarritoComponent,canActivate:[loginGuard]},
  {path:"contacto",component: ContactoComponent},
  {path:"detalles/:id",component: DetalleComponent},
  {path:"ejemplo",component: EjemploComponent},
  {path:"",component: HomeComponent},
  {path:"ofertas",component: OfertasComponent,canActivate:[loginGuard]},
  {path:"productos",component: ProductosComponent},
  {path:"terminos",component: TerminosComponent},
  {path:"login",component: LoginComponent},
  {path:'registro',component:RegistroComponent},
  {path:"usuario",component:UsuarioComponent,canActivate:[loginGuard]},
  {path:'admin',component:AdminComponent,canActivate:[adminGuard]},
  {path:"**",component: Error404Component},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
