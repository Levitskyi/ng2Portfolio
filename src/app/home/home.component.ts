import {Component} from '@angular/core';

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