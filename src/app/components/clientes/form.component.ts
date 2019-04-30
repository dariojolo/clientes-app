import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from "../../services/cliente.service";
import { Router } from "@angular/router";
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  private titulo: string = 'Crear cliente';
  private cliente:Cliente = new Cliente();
  constructor(private clienteService: ClienteService, private router:Router) { }

  ngOnInit() {
  }

  public create(): void{
    this.clienteService.create(this.cliente).subscribe(
      cliente => {this.router.navigate(['/clientes'])
                  swal.fire('Nuevo cliente',`Cliente ${cliente.nombre} creado con exito!`,'success');
    }
    )
  }
}
