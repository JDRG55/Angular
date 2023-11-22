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
  
  eliminar(id: number): void{
    this.router.navigateByUrl('/producto');
    this.productoService.deleteProucto(id).subscribe( ()=>{
      this.mensaje.add({severity:'warn', summary: 'Notificación', detail: 'Eliminado', life:5000});
      this.mostrarProductos();
    },
    err => {
      console.log(err);
      console.log('No se ha eliminado correctamente');
    }
    );
}


}
