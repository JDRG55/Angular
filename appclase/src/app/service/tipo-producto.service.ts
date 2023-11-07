import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tipoProductoI } from '../models/tipoP';
@Injectable({
  providedIn: 'root'
})
export class TipoProductoService {
  url_postgres = 'http://localhost:5000';
  //url = 'http://localhost:4000';
  base_path = `${this.url_postgres}/tipoproductos`
  //base_path2 = `${this.url}/cliente/`

  constructor(private http: HttpClient) { }
  getAllTipoProducto(): Observable<{tipo_productos:tipoProductoI[]}>{   
    return this.http.get<{tipo_productos:tipoProductoI[]}>(this.base_path)
  }
  // getOneCliente(id: number):Observable<{cliente:ClienteI[]}>{
  //   return this.http.get<{cliente:ClienteI[]}>(`${this.base_path2}${id}`)
  // }
  // createCliente(data: any):Observable<ClienteI>{
  //   return this.http.post<ClienteI>(this.base_path2, data)
  // }
  // updateCliente(id: number, data: ClienteI): Observable<ClienteI> {
  //   return this.http.put<ClienteI>(`${this.base_path2}${id}`, data);
  // }
  // deleteCliente(id: number): Observable<ClienteI> {
  //   return this.http.delete<ClienteI>(`${this.base_path2}${id}`);

  // }
}
