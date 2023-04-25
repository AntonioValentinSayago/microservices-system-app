import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit
{

  clientes: Cliente[] =
  [
    {id: 1, nombre: 'Antonio', apellido:'Valentin', email:'antoniovalentin@gmail.com',createAt:'2023-04-25'},
    {id: 2, nombre: 'Marcos', apellido:'Eduardo', email:'marcoseduardo@gmail.com',createAt:'2023-04-25'},
    {id: 3, nombre: 'Montse', apellido:'Benicio', email:'montsebenicio@gmail.com',createAt:'2023-04-25'},

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
