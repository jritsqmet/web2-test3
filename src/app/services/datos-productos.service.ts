import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosProductosService {

  constructor(private http: HttpClient) { }
  private API_PRODUCTOS = 'http://localhost:9090/productos';

  ///metodo GET
  getProductos(): Observable <any>{
    const temp = `${this.API_PRODUCTOS}/all`
    return this.http.get(temp);
  }
  getProductosById(id:number): Observable <any>{
    const temp = `${this.API_PRODUCTOS}/byid/${id}`
    return this.http.get(temp);
  }
  getProductosHome(): Observable <any>{
    const temp = `${this.API_PRODUCTOS}/home`
    return this.http.get(temp);
  }
  ///metodo POST
  postProductos(producto:any): Observable <any>{
    const temp = `${this.API_PRODUCTOS}/add`
    return this.http.post(temp,producto);
  }

  ////metodo PUT
  putProductos(producto:any, id:any): Observable <any>{

    const temp = `${this.API_PRODUCTOS}/byid/${id}`

    return this.http.put(temp,producto);
  }

  ///metodo Eliminar
  deleteProductos(id:any): Observable <any>{

    const temp = `${this.API_PRODUCTOS}/byid/${id}`

    return this.http.delete(temp);
  }
}
