import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable}from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private Http:HttpClient) { }


  private API_FIRE='https://proyectoweb-12e4c-default-rtdb.firebaseio.com/usuarios.json'
  //get
  getUsuarios():Observable <any>{
    return this.Http.get(this.API_FIRE)
  }
  
  //POST
  postUsuarios(usuario:any):Observable <any>{
    return this.Http.post(this.API_FIRE,usuario)
  }

  //Método para buscar usuario
  buscarUsuario(usuario: any, clave:any): Observable<any> {
    return this.Http.get(`${this.API_FIRE}?usuario=${usuario}&clave=${clave}`);
  }
  
}
