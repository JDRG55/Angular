import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ProuctoI } from 'src/app/models/producto';
import { ProuctoService } from 'src/app/service/producto.service'; 

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})
export class ActualizarProductoComponent  {

  public id: number=0;
  public form: FormGroup=this.formBuilder.group({
    id: [''],
    nombreProducto: ['', [Validators.required]],
    marcaProducto: ['', [Validators.required]],
    precioProducto: ['', [Validators.required]],
    stockProducto: ['', [Validators.required]],
    cantidadProducto: ['', [Validators.required]],
    TipoproductoId: ['', [Validators.required]],
  })

  constructor(
    private formBuilder: FormBuilder,
    private productoService: ProuctoService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getProducto(this.id);
  }

  getProducto(id: number){
    this.productoService.getOneProducto(id).subscribe({next: (data)=>{
      this.form.setValue(data.producto)
    }})
  }
onSubmit(){
    const formValue: ProuctoI = this.form.value;
    const id: number = this.form.value.id;
    this.productoService.updateProucto(id, formValue).subscribe(()=>{
      setTimeout(()=>{
        this.messageService.add({severity: 'success', summary: 'Notificacion',detail: 'Actualizado', life:5000});
      }, 0);
      this.router.navigateByUrl('productos');
    })
  }

  cancel() {
    this.router.navigateByUrl('/productos');
  }

  get nombreProducto() { return this.form.get('nombreProducto'); }
  get marcaProducto() { return this.form.get('marcaProducto'); }
  get precioProducto() { return this.form.get('precioProducto'); }
  get stockProducto() { return this.form.get('stockProducto'); }
  get cantidadProducto() { return this.form.get('cantidadProducto'); }
  get TipoproductoId() { return this.form.get('TipoproductoId'); }

}
