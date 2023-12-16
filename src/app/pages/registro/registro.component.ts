import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {


  constructor(private servicio:LoginService){  
  }

  usuario:any;
  clave:any;
  tipo:any;

  guardarUsuario(usuario:any){
    console.log(usuario.value)
    this.servicio.postUsuarios(usuario.value).subscribe()
  }


}
