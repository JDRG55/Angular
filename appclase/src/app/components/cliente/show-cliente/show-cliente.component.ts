import { Component, OnInit } from '@angular/core';
import { ClienteI } from 'src/app/models/clientes';
import { Router } from '@angular/router';
// import { ClienteService } from '../../../services/cliente.service'

@Component({
  selector: 'show-cliente.component',
  templateUrl: './show-cliente.component.html',
  styleUrls: ['./show-cliente.component.css']
})
export class ShowClienteComponent implements OnInit {
  public clientes:ClienteI[] = []
  public displayedColumns: string[] = ["id", "nombreCliente", "direccionCliente", "telefonoCliente", "correoCliente","Acciones"]
  constructor(
    // private clienteService: ClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.mostrarClientes()
  }

  // mostrarClientes() {
  //   this.clienteService.getAllCliente()
  //     .subscribe({
  //       next: (data) => {
  //         this.clientes = data.clientes
  //         console.log(this.clientes)
  //       }
  //     })
  // }
}
