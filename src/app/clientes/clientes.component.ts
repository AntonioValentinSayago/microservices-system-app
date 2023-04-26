import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json'
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit
{

  clientes?: Cliente[];

  constructor(private clientesService: ClienteService) { }

  ngOnInit()
  {
    this.clientesService.getClientes().subscribe ( clientes => this.clientes = clientes);
  }

}
