import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { tipoProductoI } from 'src/app/models/tipoP';
import { TipoProductoService } from 'src/app/service/tipo-producto.service';

@Component({
  selector: 'app-crear-tipo-producto',
  templateUrl: './crear-tipo-producto.component.html',
  styleUrls: ['./crear-tipo-producto.component.css']
})
export class CrearTipoProductoComponent {

  

    public form:FormGroup = this.formBuilder.group({
      nombreTipoProducto: ['', [Validators.required]],
    });
  
    constructor(private formBuilder: FormBuilder, private tipoproductoService: TipoProductoService, private messageService: MessageService, private router:Router){}
  
    ngOnInit(): void {
  
    }
  
    onSubmit(): void{
      const formValue: tipoProductoI = this.form.value;
      console.log(formValue);
      this.tipoproductoService.createTipoProducto(formValue).subscribe(() =>{
        // console.log('Se ha creado correctamente');
        setTimeout(()=>{
          this.messageService.add({severity:'succes', summary:'Notificacion',detail:'Creado', life: 5000});
        }, 0);
        this.router.navigateByUrl('tipoproductos');
      },
      err => {
        console.log(err);
        console.log('No se ha creado correctamente');
      }
      );
    }
  
    cancel(){
      this.router.navigateByUrl('/tipoproductos');
    }
  
    get nombreTipoProducto() { return this.form.get('nombreTipoProducto'); }
  
  
  

}
