import { Component } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.html'
})

export class HomeComponent {
    title: string;
    description: string;

    clearData() {
        this.description = '';
    }

    constructor() {
        this.title = 'Home';
        this.description = 'Description';
    }
}