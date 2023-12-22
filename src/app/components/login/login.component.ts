import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private servicio:LoginService, private router:Router){  
  }

  usuario:any;
  clave:any;
  tipo:any;
  dataUsuarios:any;
  //Metodo GET

  ngOnInit(){
    this.servicio.getUsuarios().subscribe(data=>{
      this.dataUsuarios=data;
      this.dataUsuarios=Object.values(this.dataUsuarios)
      console.log('Lista cargada')
    })
  }


  LoginUser(usuarioLogin: any) {
    const usuario = usuarioLogin.value.usuario;
    const clave = usuarioLogin.value.clave;
    const usuarioEncontrado = this.dataUsuarios.find((user: any) => user.usuario === usuario && user.clave === clave);
    if (usuarioEncontrado) {
      this.tipo = usuarioEncontrado.tipo;
      console.log(this.tipo)
      alert("Acceso concedido");
      this.router.navigate(['']);
    } else {
      alert("Error de acceso. Verifica tus credenciales.");
      this.router.navigate(['login']);
    }
  }
  
  
}
