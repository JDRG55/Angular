import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { VentaI } from '../models/venta';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  url_postgres = 'http://localhost:5000';
  //url = 'http://localhost:4000';
  base_path = `${this.url_postgres}/ventas/`
  base_path2 =`${this.url_postgres}/venta/`

  constructor(private http: HttpClient) { }
  getAllVenta(): Observable<{ventas:VentaI[]}>{   
    return this.http.get<{ventas:VentaI[]}>(this.base_path)
  }
  getOneVenta(id: number):Observable<{ventas:VentaI[]   }>{
    return this.http.get<{ventas:VentaI[]}>(`${this.base_path2}${id}`)
  }
  createVenta(data: any):Observable<VentaI>{
    return this.http.post<VentaI>(this.base_path2, data)
  }
  updateVenta(id: number, data: VentaI): Observable<VentaI> {
    return this.http.put<VentaI>(`${this.base_path2}${id}`, data);
  }
  deleteVenta(id: number): Observable<VentaI> {
    return this.http.delete<VentaI>(`${this.base_path2}${id}`);

  }
}
