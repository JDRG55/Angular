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
  base_path2 = `${this.url_postgres}/tipoproducto/`

  constructor(private http: HttpClient) { }
  getAllTipoProducto(): Observable<{tipo_productos:tipoProductoI[]}>{   
    return this.http.get<{tipo_productos:tipoProductoI[]}>(this.base_path)
  }
  getOneTipoProducto(id: number):Observable<{tipo_producto:tipoProductoI[]}>{
    return this.http.get<{tipo_producto:tipoProductoI[]}>(`${this.base_path2}${id}`)
  }
  createTipoProducto(data: any):Observable<tipoProductoI>{
    return this.http.post<tipoProductoI>(this.base_path2, data)
  }
  updateTipoProducto(id: number, data: tipoProductoI): Observable<tipoProductoI> {
    return this.http.put<tipoProductoI>(`${this.base_path2}${id}`, data);
  }
  deleteTipoProducto(id: number): Observable<tipoProductoI> {
    return this.http.delete<tipoProductoI>(`${this.base_path2}${id}`);

  }
}
