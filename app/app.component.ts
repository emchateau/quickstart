import { Component } from '@angular/core';

/* Classe Hero
   création d’une classe
*/
export class Hero {
  id: number;
  name: string;
}

/* @Component décoration
   avec des liens vers les propriétés définies dans le composant d’application
   utilisation d’une directive prédéfinie ngModel
*/
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <div>
      <h2>My heroes</h2>
      <ul class="heroes">
        <li *ngFor="let hero of heroes">
          <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
      </ul>
    </div>
  `
})

/* Composant d’application
   avec deux propriétés dont l’utilisation d’un array et d’une classe
*/
export class AppComponent {
  title = 'tour of Heroes';
  public heroes = HEROES;
}

/* Array créant des objets de la classe Hero
*/
const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'Ruberman' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
