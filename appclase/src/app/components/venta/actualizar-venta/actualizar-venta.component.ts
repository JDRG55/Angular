import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { VentaI } from 'src/app/models/venta';
import { VentaService } from 'src/app/service/venta.service';



@Component({
  selector: 'app-actualizar-venta',
  templateUrl: './actualizar-venta.component.html',
  styleUrls: ['./actualizar-venta.component.css']
})
export class ActualizarVentaComponent {

  public id: number=0;
  public form: FormGroup=this.formBuilder.group({
    fechaVenta: ['', [Validators.required]],
    subtotal: ['', [Validators.required]],
    impuestos: ['', [Validators.required]],
    descuentos: ['', [Validators.required]],
    total: ['', [Validators.required]],
    clienteId: ['', [Validators.required]],
  })

  constructor(
    private formBuilder: FormBuilder,
    private ventaService: VentaService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getVenta(this.id);
    console.log(this.id)
  }

  getVenta(id: number){
    this.ventaService.getOneVenta(id).subscribe({next: (data)=>{
      console.log(data)
      this.form.setValue(data.ventas)
    }})
  }
onSubmit(){
    const formValue: VentaI = this.form.value;
    const id: number = this.form.value.id;
    this.ventaService.updateVenta(id, formValue).subscribe(()=>{
      setTimeout(()=>{
        this.messageService.add({severity: 'success', summary: 'Notificacion',detail: 'Actualizado', life:5000});
      }, 0);
      this.router.navigateByUrl('ventas');
    })
  }

  cancel() {
    this.router.navigateByUrl('/ventas');
  }

  get fechaVenta() { return this.form.get('fechaVenta'); }
  get subtotal() { return this.form.get('subtotal'); }
  get impuestos() { return this.form.get('impuestos'); }
  get descuentos() { return this.form.get('descuentos'); }
  get total() { return this.form.get('total'); }
  get clienteId() { return this.form.get('clienteId'); }

}
