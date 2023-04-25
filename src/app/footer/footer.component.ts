import { Component } from "@angular/core";

@Component(
  {
    selector: 'app-footer',
    templateUrl: './footer.component.html'
  }
)
export class FooterComponent
{
  public autor: any = {nombre: 'Antonio', apellico: 'valentin'}
}
