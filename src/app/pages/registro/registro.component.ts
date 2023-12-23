import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {


  constructor(private servicio:LoginService,private router:Router){  

  }

  usuario:any;
  clave:any;
  tipo:any;


  guardarUsuario(usuario:any){
    usuario.value.tipo="user"
    usuario.value.nombre=""
    usuario.value.correo=""
    usuario.value.direccion=""
    usuario.value.cuidad=""
    console.log(usuario.value)
    this.servicio.postUsuarios(usuario.value).subscribe()
    

    alert("Usuario Registado Con Exito")
    this.router.navigate(["login"])
  }



}
