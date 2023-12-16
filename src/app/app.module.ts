import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { OfertasComponent } from './pages/ofertas/ofertas.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { TerminosComponent } from './pages/terminos/terminos.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FutterComponent } from './components/futter/futter.component';
import { EjemploComponent } from './pages/ejemplo/ejemplo.component';
import { Error404Component } from './pages/error404/error404.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegistroComponent } from './pages/registro/registro.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AcercadeComponent,
    CarritoComponent,
    ContactoComponent,
    DetalleComponent,
    OfertasComponent,
    ProductosComponent,
    TerminosComponent,
    NavBarComponent,
    FutterComponent,
    EjemploComponent,
    Error404Component,
    LoginComponent,
    RegistroComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule // Formularios resposivos

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
