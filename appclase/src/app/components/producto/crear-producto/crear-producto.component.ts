import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ProuctoI } from 'src/app/models/producto';
import { ProuctoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent {

  public form:FormGroup = this.formBuilder.group({
    nombreProducto: ['', [Validators.required]],
    marcaProducto: ['', [Validators.required]],
    precioProducto: ['', [Validators.required]],
    stockProducto: ['', [Validators.required]],
    cantidadProducto: ['', [Validators.required]],
    TipoproductoId: ['', [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder, private productoService: ProuctoService, private messageService: MessageService, private router:Router){}

  ngOnInit(): void {

  }

  onSubmit(): void{
    const formValue: ProuctoI = this.form.value;
    console.log(formValue);
    this.productoService.createProucto(formValue).subscribe(() =>{
      // console.log('Se ha creado correctamente');
      setTimeout(()=>{
        this.messageService.add({severity:'succes', summary:'Notificacion',detail:'Creado', life: 5000});
      }, 0);
      this.router.navigateByUrl('producto');
    },
    err => {
      console.log(err);
      console.log('No se ha creado correctamente');
    }
    );
  }

  cancel(){
    this.router.navigateByUrl('/producto');
  }

  get nombreProducto() { return this.form.get('nombreProducto'); }
  get marcaProducto() { return this.form.get('marcaProducto'); }
  get precioProducto() { return this.form.get('precioProducto'); }
  get stockProducto() { return this.form.get('stockProducto'); }
  get cantidadProducto() { return this.form.get('cantidadProducto'); }
  get TipoproductoId() { return this.form.get('TipoproductoId'); }


}
