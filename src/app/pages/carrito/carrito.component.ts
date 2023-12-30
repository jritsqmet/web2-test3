import { Component, numberAttribute } from '@angular/core';
import { Productoitem } from '../../productoItem';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
    productos: any

  cargarCarrito(){
   console.log("inicio")
    let listaObjetos = [];

    let cadena:string |null = localStorage.getItem("CAR");

    // Paso 1: Divide la cadena en pares nombre:valor
    if(cadena === undefined ||cadena===null || cadena === '')
    {

    }
    else{
      let pares = cadena.split('|');
      console.log(pares)
    // Paso 2: Itera sobre los pares y crea objetos
      
      for (let par of pares) {
          let [nombre, valor] = par.split(':');
          
          // Supongamos que tienes una interfaz o clase para representar tus objetos
          let objeto = { nombre: nombre, valor: valor }; // Reemplaza esto según tu estructura
          listaObjetos.push(objeto);
      }
      this.productos = listaObjetos;
    }


  }

  limpiar(){
    localStorage.setItem("CAR","")
    console.log("limpiar")
  }
  ngOnInit(){
    this.cargarCarrito();
    console.log(this.productos)
  }
  getCantidad(){
    return this.productos.length;
  }
  getTotal(){
    let total : number;
    total = 0;
    for (let par of this.productos) {
      
      total = total + parseFloat(par.valor);
    }
    return total;
  }

}
