import { Component } from '@angular/core';

export const HEROES = [
    {id: 11, name: 'Mr. Nice'},
    {id: 12, name: 'Narco'},
    {id: 13, name: 'Bombasto'},
    {id: 14, name: 'Celeritas'},
    {id: 15, name: 'Magneta'},
    {id: 16, name: 'RubberMan'},
    {id: 17, name: 'Dynama'},
    {id: 18, name: 'Dr IQ'},
    {id: 19, name: 'Magma'},
    {id: 20, name: 'Tornado'}
];

@Component({
    selector: 'works',
    template: `
<app-header></app-header>
<h1>Works</h1>
<a [routerLink]=" ['./works', 2] " routerLinkActive="active">1asdasdasdasd</a>
`
})

export class WorksComponent {
    heroes: any = HEROES;

}