import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ProuctoI } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProuctoService {
  url_postgres = 'http://localhost:5000';
  //url = 'http://localhost:4000';
  base_path = `${this.url_postgres}/productos`
  base_path2 = `${this.url_postgres}/producto/`
  
  constructor(private http: HttpClient) { }
  getAllProucto(): Observable<{productos:ProuctoI[]}>{   
    return this.http.get<{productos:ProuctoI[]}>(this.base_path)
  }
  getOneProducto(id: number):Observable<{producto:ProuctoI[]}>{
    return this.http.get<{producto:ProuctoI[]}>(`${this.base_path2}${id}`)
  }
  createProucto(data: any):Observable<ProuctoI>{
    return this.http.post<ProuctoI>(this.base_path2, data)
  }
  updateProucto(id: number, data: ProuctoI): Observable<ProuctoI> {
    return this.http.put<ProuctoI>(`${this.base_path2}${id}`, data);
  }
  deleteProucto(id: number): Observable<ProuctoI> {
    return this.http.delete<ProuctoI>(`${this.base_path2}${id}`);

  }
}

