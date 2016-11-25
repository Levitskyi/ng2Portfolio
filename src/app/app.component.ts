import { Component } from '@angular/core';
import '../assets/css/styles.css';

@Component({
    selector: 'app',
    template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
`,
    styleUrls: ['./app.component.css']
})

export class AppComponent {

}
