import { Component } from '@angular/core';
import { Productoitem } from '../../productoItem';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
    productos: any

  cargarCarrito(){
    let carData = localStorage.getItem("CAR")
    let items:any = carData?.split(":")

 

  }

  limpiar(){
    localStorage.setItem("CAR","")
    console.log("limpiar")
  }

}
