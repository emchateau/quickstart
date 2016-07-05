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
    <h2>{{hero.name}} details !</h2>
    <div>
      <label>id: </label>
      <input value="{{hero.id}}" placeholder="name">
    </div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
  `
})

/* Composant d’application
   avec deux propriétés
*/
export class AppComponent {
  title = 'tour of Heroes';
  hero : Hero = {
    id: 1,
    name: 'Windstorm'
  };
}
