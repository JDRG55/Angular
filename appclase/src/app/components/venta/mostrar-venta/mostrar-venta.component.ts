import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { VentaI } from 'src/app/models/venta';
import { VentaService } from 'src/app/service/venta.service';

@Component({
  selector: 'app-mostrar-venta',
  templateUrl: './mostrar-venta.component.html',
  styleUrls: ['./mostrar-venta.component.css']
})
export class MostrarVentaComponent implements OnInit {
  public venta:VentaI[] = [
  ]
  constructor(
    private ventaService: VentaService,
    private router: Router,
    private mensaje: MessageService
  ) { }

  ngOnInit(): void {
    this.mostrarVentas()
  }

  mostrarVentas() {
    this.ventaService.getAllVenta()
      .subscribe({
        next: (data) => {
          this.venta = data.ventas
          console.log(this.venta)
          
        }
      })
  } 

}
