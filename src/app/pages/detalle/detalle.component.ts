import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosProductosService } from 'src/app/services/datos-productos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {
  constructor(private rutaActiva: ActivatedRoute, private servicio: DatosProductosService) { }
  producto: any;

  ngOnInit() {
    this.rutaActiva.params.subscribe( ruta =>{
      console.log( ruta['id'])
       const id= ruta['id']
       this.producto = this.servicio.getProductosById(id).subscribe(data =>{
        this.producto = data;
        console.log( ruta['id'])
        console.log(data)
      })
      console.log( ruta['id'])

       console.log(this.producto)
       console.log( ruta['id'])
       console.log(this.producto.get())
       
    })

  }
}
