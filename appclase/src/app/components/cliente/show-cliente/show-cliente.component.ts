import { Component, OnInit } from '@angular/core';
import { ClienteI } from 'src/app/models/clientes';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/service/cliente.service';
import {Message,MessageService} from 'primeng/api';

@Component({
  selector: 'show-cliente.component',
  templateUrl: './show-cliente.component.html',
  styleUrls: ['./show-cliente.component.css']
})
export class ShowClienteComponent implements OnInit {
  public clientes:ClienteI[] = [
  ]
  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private mensaje: MessageService
  ) { }

  ngOnInit(): void {
    this.mostrarClientes()
  }

  mostrarClientes() {
    this.clienteService.getAllCliente()
      .subscribe({
        next: (data) => {
          this.clientes = data.cliente
          console.log(this.clientes)
        }
      })
  } 
  eliminar(id: number): void{
    this.router.navigateByUrl('/cliente');
    this.clienteService.deleteCliente(id).subscribe( ()=>{
      this.mensaje.add({severity:'warn', summary: 'Notificación', detail: 'Cliente Eliminado', life:5000});
      this.mostrarClientes();
    },
    err => {
      console.log(err);
      console.log('No se ha eliminado correctamente');
    }
    );
}
}
