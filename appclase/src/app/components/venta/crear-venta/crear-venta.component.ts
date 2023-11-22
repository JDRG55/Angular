import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { VentaI } from 'src/app/models/venta';
import { VentaService } from 'src/app/service/venta.service';

@Component({
  selector: 'app-crear-venta',
  templateUrl: './crear-venta.component.html',
  styleUrls: ['./crear-venta.component.css']
})
export class CrearVentaComponent {

  public form:FormGroup = this.formBuilder.group({
    fechaVenta: ['', [Validators.required]],
    subtotal: ['', [Validators.required]],
    impuestos: ['', [Validators.required]],
    descuentos: ['', [Validators.required]],
    total: ['', [Validators.required]],
    clienteId: ['', [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder, private ventaService:VentaService , private messageService: MessageService, private router:Router){}

  ngOnInit(): void {

  }

  onSubmit(): void{
    const formValue: VentaI = this.form.value;
    console.log(formValue);
    this.ventaService.createVenta(formValue).subscribe(() =>{
      // console.log('Se ha creado correctamente');
      setTimeout(()=>{
        this.messageService.add({severity:'succes', summary:'Notificacion',detail:'Creado', life: 5000});
      }, 0);
      this.router.navigateByUrl('ventas');
    },
    err => {
      console.log(err);
      console.log('No se ha creado correctamente');
    }
    );
  }

  cancel(){
    this.router.navigateByUrl('/ventas');
  }

  get fechaVenta() { return this.form.get('fechaVenta'); }
  get subtotal() { return this.form.get('subtotal'); }
  get impuestos() { return this.form.get('impuestos'); }
  get descuentos() { return this.form.get('descuentos'); }
  get total() { return this.form.get('total'); }
  get clienteId() { return this.form.get('clienteId'); }

}
