import { Component } from '@angular/core';
import { DatosProductosService } from 'src/app/services/datos-productos.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(private servicio:DatosProductosService){}

  //Metodo GET
  dataProductos:any;
  ngOnInit(){
    this.servicio.getProductos().subscribe(data=>{
      this.dataProductos=data;
    })
  }

//Metodo POST
agregarProducto(id:any,nombre:any,descripcion:any,precio:any,descuento:any,imagen:any){
 const precioNumerico = parseFloat(precio);
 const descuentoNumerico = parseFloat(descuento);
 const producto={
  id:id,
  nombre:nombre,
  descripcion:descripcion,
  valor:precioNumerico,
  descuento:descuentoNumerico,
  imagen:imagen
 }
 this.servicio.postProductos(producto).subscribe()
}

//Metodo PUT
editarProducto(id:any,nombre:any,descripcion:any,precio:any,descuento:any,imagen:any){
  const precioNumerico = parseFloat(precio);
  const descuentoNumerico = parseFloat(descuento);
  const producto={
   id:id,
   nombre:nombre,
   descripcion:descripcion,
   valor:precioNumerico,
   descuento:descuentoNumerico,
   imagen:imagen
  }
 this.servicio.putProductos(producto,id).subscribe()
}

//Metodo Eliminar
borrarProducto(id:any){
 this.servicio.deleteProductos(id).subscribe()
}





}
