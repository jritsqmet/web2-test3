import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosProductosService {

  constructor(private http: HttpClient) { }
  private API_PRODUCTOS = 'http://localhost:3000/Productos';

  ///metodo GET
  getProductos(): Observable <any>{
    
    return this.http.get(this.API_PRODUCTOS);
  }
  getProductosById(id:number): Observable <any>{
    const temp = `${this.API_PRODUCTOS}/${id}`
    return this.http.get(temp);
  }
  ///metodo POST
  postProductos(producto:any): Observable <any>{
    
    return this.http.post(this.API_PRODUCTOS,producto);
  }

  ////metodo PUT
  putProductos(producto:any, id:any): Observable <any>{
    
    const temp = `${this.API_PRODUCTOS}/${id}`

    return this.http.put(temp,producto);
  }

  ///metodo Eliminar
  deleteProductos(id:any): Observable <any>{
    
    const temp = `${this.API_PRODUCTOS}/${id}`

    return this.http.delete(temp);
  }
}
