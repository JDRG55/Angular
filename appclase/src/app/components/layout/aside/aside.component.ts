import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  items: MenuItem[]=[];
ngOnInit(): void {
  this.items = [
    {
      label: 'Clientes',
      icon: 'pi pi-fw pi-users',
      items: [
        {
           label: 'Crud Cliente'
         },
        {
           label: 'HTML 2'
      }
      ]
    },
    {
      label: 'Tipo Productos',
      icon: 'pi pi-fw pi-qrcode',
    },
    {
      label: 'Productos',
      icon: 'pi pi-fw pi-shopping-bag',
    },
    {
      label: 'Ventas',
      icon: 'pi pi-fw pi-shopping-cart',
    }

  ];

  
}
}
