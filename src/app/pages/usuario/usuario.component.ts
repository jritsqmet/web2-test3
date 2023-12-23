import { Component } from '@angular/core';

import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  nombre:any
  cuidad:any
  correo:any
  direccion:any

  constructor(private servicio:LoginService){}
ActualizarUsuario(usuario:any) {
  this.servicio.postUsuarios(usuario.value).subscribe()
throw new Error('Method not implemented.');
}


}
