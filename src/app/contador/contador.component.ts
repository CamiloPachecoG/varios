import { Component } from '@angular/core';

@Component({
  selector: 'contador',
  template: `
    <h1>{{ title }}</h1>
    <h3>La base es: {{ base }}</h3>
    <button (click)="aumentar(base)"> + {{ base }}</button>

    <span>{{ contador }}</span>

    <button (click)="aumentar(-base)"> - {{ base }}</button>
  `
})
export class ContadorComponent {

  title: string = 'Contador App';
  contador: number = 0;
  base: number = 5;

  aumentar( valor: number){
    this.contador += valor;
  }

  /*disminuir(){
    this.contador -= 1;
  }*/
}