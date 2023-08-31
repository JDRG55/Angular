import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowClienteComponent } from './components/cliente/show-cliente/show-cliente.component';
import { DelClienteComponent } from './components/cliente/del-cliente/del-cliente.component';
import { UpdClienteComponent } from './components/cliente/upd-cliente/upd-cliente.component';
import { MostrarProductoComponent } from './components/producto/mostrar-producto/mostrar-producto.component';
import { MostrarTipoProductoComponent } from './components/tipoProducto/mostrar-tipo-producto/mostrar-tipo-producto.component';
import { MostrarVentaComponent } from './components/venta/mostrar-venta/mostrar-venta.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/', 
    pathMatch: 'full' 
  },
  {
    path: "clientes",
    component: ShowClienteComponent
  },
  {
    path: "addclientes",
    component: DelClienteComponent
  },
  {
    path: "clientes/edit/:id",
    component: UpdClienteComponent
  },
  {
    path: "tipoproductos",
    component: MostrarTipoProductoComponent
  },

  {
    path: "productos",
    component: MostrarProductoComponent
  },

  {
    path: "ventas",
    component: MostrarVentaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
