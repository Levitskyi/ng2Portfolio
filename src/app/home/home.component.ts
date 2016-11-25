import { Component } from '@angular/core';

import 'owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
declare var $:any;


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

    ngOnInit() {
        $('.owl-carousel').owlCarousel();
    }

    constructor() {
        this.title = 'Home';
        this.description = 'Description';
    }
}