import { Component, OnInit } from '@angular/core';
import { tipoProductoI } from 'src/app/models/tipoP';
import { Router } from '@angular/router';
import { TipoProductoService } from 'src/app/service/tipo-producto.service';
import {Message,MessageService} from 'primeng/api';

@Component({
  selector: 'mostrar-tipo-producto',
  templateUrl: './mostrar-tipo-producto.component.html',
  styleUrls: ['./mostrar-tipo-producto.component.css']
})
export class MostrarTipoProductoComponent implements OnInit{
  public tipoP:tipoProductoI[] = [
  ]
  constructor( 
    private tipoProductoService: TipoProductoService,
    private router: Router,
    private mensaje: MessageService
  ) { }

  ngOnInit(): void {
    this.mostrartipoProducto()
  }

  mostrartipoProducto() {
    this.tipoProductoService.getAllTipoProducto()
      .subscribe({
        next: (data) => {
          this.tipoP= data.tipo_productos
          console.log(this.tipoP)  
        }
      })
  }
  // eliminar(id: number): void{
  //   this.router.navigateByUrl('/cliente');
  //   this.clienteService.deleteCliente(id).subscribe(()=>{
  //     this.mensaje.add({severity:'warn', summary: 'Notificación', detail: 'Cliente Eliminado', life:5000});
  //     this.mostrarClientes();
  //   },
  //   err => {
  //     console.log(err);
  //     console.log('No se ha eliminado correctamente');
  //   }
   // );
}

