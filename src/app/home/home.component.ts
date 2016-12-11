import {Component} from '@angular/core';

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
    showSidebar: boolean = false;


    toggleSidebar(event:boolean) {
        this.showSidebar = event;
    }

}