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
agregarProducto(nombre:any,descripcion:any,precio:any,descuento:any,imagen:any){
  const precioNumerico = parseFloat(precio);
  const descuentoNumerico = parseFloat(descuento);
  const producto={
    nombre:nombre,
    descripcion:descripcion,
    valor:precioNumerico,
    descuento:descuentoNumerico,
    imagen:imagen
    }
  this.servicio.postProductos(producto).subscribe()
  this.postProcess("Producto agregado")
  }
idselect:any
nombreselect:any
precioselect:any
descuentoselect:any
descripselect:any
imageselect:any
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
 this.postProcess("Producto Editado")
}

//Metodo Eliminar
borrarProducto(id:any){
 this.servicio.deleteProductos(id).subscribe()
 this.postProcess("Producto Eliminado")
}


editarFila(producto:any) {
  // Copiar la persona seleccionada para evitar modificar directamente el objeto en la lista
  console.log(producto);
  this.idselect = producto.id
  this.nombreselect = producto.nombre
  this.descuentoselect = producto.descuento
  this.precioselect = producto.precio
  this.descripselect = producto.descripcion
  this.imageselect = producto.imagen

}
limpiarCampos(){
  this.idselect =  ""
  this.nombreselect=""
  this.precioselect = ""
  this.descuentoselect=""
  this.descripselect=""
  this.imageselect = ""
}
cargarProd(){
  this.servicio.getProductos().subscribe(data=>{
    this.dataProductos=data;
  })
}
postProcess(mensaje:string){

  this.limpiarCampos();
  alert(mensaje);
  this.cargarProd();
}

}
