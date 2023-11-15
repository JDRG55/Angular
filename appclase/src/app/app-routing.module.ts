import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowClienteComponent } from './components/cliente/show-cliente/show-cliente.component';
import { DelClienteComponent } from './components/cliente/del-cliente/del-cliente.component';
import { UpdClienteComponent } from './components/cliente/upd-cliente/upd-cliente.component';
import { MostrarProductoComponent } from './components/producto/mostrar-producto/mostrar-producto.component';
import { MostrarTipoProductoComponent } from './components/tipoProducto/mostrar-tipo-producto/mostrar-tipo-producto.component';
import { MostrarVentaComponent } from './components/venta/mostrar-venta/mostrar-venta.component';
import { AppClienteComponent } from './components/cliente/app-cliente/app-cliente.component';
import { ActualizarTipoProductoComponent } from './components/tipoProducto/actualizar-tipo-producto/actualizar-tipo-producto.component';
import { CrearProductoComponent } from './components/producto/crear-producto/crear-producto.component';
import { ActualizarProductoComponent } from './components/producto/actualizar-producto/actualizar-producto.component';

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
    component: AppClienteComponent
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
    path: "tipoproductos/edit/:id",
    component: ActualizarTipoProductoComponent
  },


  {
    path: "productos",
    component: MostrarProductoComponent
  },

  {
    path: "addproductos",
    component: CrearProductoComponent
  },

  {
    path: "productos/edit/:id",
    component: ActualizarProductoComponent
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
