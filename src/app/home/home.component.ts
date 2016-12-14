import {Component} from '@angular/core';

import * as WOW from 'wowjs/dist/wow.js';

@Component({
    selector: 'home',
    templateUrl: './home.html'
})

export class HomeComponent {
    title: string;
    description: string;
    showSidebar: boolean = false;

    ngOnInit() {
        console.log('init');
        var wow2 = new WOW().init();

    }

    toggleSidebar(event:boolean) {
        this.showSidebar = event;
    }

}