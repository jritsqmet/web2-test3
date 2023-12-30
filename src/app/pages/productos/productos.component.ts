import { Component } from '@angular/core';
import { DatosProductosService } from 'src/app/services/datos-productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  constructor(private servicio: DatosProductosService){}

  dataProductos:any;

  ngOnInit(){
    this.servicio.getProductos().subscribe(data =>{
      console.log("test")
      console.log(this.dataProductos);
      this.dataProductos = data;

    })
  }
  public sortProductsDesc(): void {
    this.dataProductos = this.dataProductos.sort((a: { valor: number; }, b: { valor: number; }) => a.valor - b.valor);
  }

  public sortProductsAsc() {
    this.dataProductos = this.dataProductos.sort((a: { valor: number; }, b: { valor: number; }) => b.valor - a.valor);
  }
  filterBy(nameInput: HTMLInputElement) {
    if (nameInput.value.length > 0) {
      this.dataProductos = this.dataProductos.filter((p: { nombre: string; }) => p.nombre.toLowerCase().includes(nameInput.value.toLowerCase()))
    }
    else{
      this.servicio.getProductos().subscribe(data =>{

        this.dataProductos = data;
  
      })
    }
  }
}
