import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ProuctoI } from 'src/app/models/producto';
import { ProuctoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-mostrar-producto',
  templateUrl: './mostrar-producto.component.html',
  styleUrls: ['./mostrar-producto.component.css']
})
export class MostrarProductoComponent implements OnInit {
  public producto:ProuctoI[] = [
  ]
  constructor(
    private productoService: ProuctoService,
    private router: Router,
    private mensaje: MessageService
  ) { }

  ngOnInit(): void {
    this.mostrarProductos()
  }

  mostrarProductos() {
    this.productoService.getAllProucto()
      .subscribe({
        next: (data) => {
          this.producto = data.productos
          console.log(this.producto)
          
        }
      })
  } 


}
