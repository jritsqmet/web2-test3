import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatosProductosService } from 'src/app/services/datos-productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private servicio: DatosProductosService, private router:Router){}

  dataProductos:any;
  id:any
  ngOnInit(){
    this.servicio.getProductosHome().subscribe(data =>{
      this.dataProductos = data;
      console.log(data)
    })
  }


}
