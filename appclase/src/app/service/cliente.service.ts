import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClienteI } from '../models/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  //url = 'http://localhost:4000';
  url_postgres = 'http://localhost:5000';
  base_path = `${this.url_postgres}/clientes/`
  base_path2 = `${this.url_postgres}/cliente/`

  constructor(private http: HttpClient) { }
  getAllCliente(): Observable<{cliente:ClienteI[]}>{
    return this.http.get<{cliente:ClienteI[]}>(this.base_path)
    
  }
  getOneCliente(id: number):Observable<{cliente:ClienteI[]}>{
    return this.http.get<{cliente:ClienteI[]}>(`${this.base_path2}${id}`)
  }
  createCliente(data: any):Observable<ClienteI>{
    return this.http.post<ClienteI>(this.base_path2, data)
  }
  updateCliente(id: number, data: ClienteI): Observable<ClienteI> {
    return this.http.put<ClienteI>(`${this.base_path2}${id}`, data);
  }
  deleteCliente(id: number): Observable<ClienteI> {
    return this.http.delete<ClienteI>(`${this.base_path2}${id}`);

  }
}
