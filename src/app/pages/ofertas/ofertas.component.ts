import { Component } from '@angular/core';
import { DatosProductosService } from 'src/app/services/datos-productos.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent {
  constructor(private servicio: DatosProductosService){}

  dataProductos:any;

  ngOnInit(){
    this.servicio.getProductos().subscribe(data =>{
      this.dataProductos = data.filter((p: { descuento: number; }) => p.descuento !== 0.00);
    })
  }
}
