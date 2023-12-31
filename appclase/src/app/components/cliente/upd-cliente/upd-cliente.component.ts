import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ClienteI } from 'src/app/models/clientes';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-upd-cliente',
  templateUrl: './upd-cliente.component.html',
  styleUrls: ['./upd-cliente.component.css']
})
export class UpdClienteComponent {

  public id: number=0;
  public form: FormGroup=this.formBuilder.group({
    id: [''],
    nombreCliente: ['', [Validators.required]],
    direccionCliente: ['', [Validators.required]],
    telefonoCliente: ['', [Validators.required]],
    correoCliente: ['', [Validators.required]],
    passwordCliente: ['', [Validators.required]],
  })

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getCliente(this.id);
  }

  getCliente(id: number){
    this.clienteService.getOneCliente(id).subscribe({next: (data)=>{
      this.form.setValue(data.cliente)
    }})
  }
onSubmit(){
    const formValue: ClienteI = this.form.value;
    const id: number = this.form.value.id;
    this.clienteService.updateCliente(id, formValue).subscribe(()=>{
      setTimeout(()=>{
        this.messageService.add({severity: 'success', summary: 'Notificacion',detail: 'Cliente Actualizado', life:5000});
      }, 0);
      this.router.navigateByUrl('clientes');
    })
  }

  cancel() {
    this.router.navigateByUrl('/clientes');
  }

  get nombreCliente() { return this.form.get('nombreCliente'); }
  get direccionCliente() { return this.form.get('direccionCliente'); }
  get telefonoCliente() { return this.form.get('telefonoCliente'); }
  get correoCliente() { return this.form.get('correoCliente'); }
  get passwordCliente() { return this.form.get('passwordCliente'); }

}


