import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  //constructor() { }
  //para inicializar cosas
  //ngOnInit(): void {}

  heroes: string[] = ['Spiderman','Ironman','Batman','Joker'];
  heroeBorrado: string = '';

  //shift borra el primero elemento del arreglo y lo retorna como string o indefinido
  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
