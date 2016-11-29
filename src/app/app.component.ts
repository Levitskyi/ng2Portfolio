import { Component } from '@angular/core';

import '../assets/fonts/icomoon/style.css';
import '../assets/fonts/map-icons/map-icons.min.css';
import '../assets/css/theme-color.css';
import '../assets/css/styles.css';

@Component({
    selector: 'app',
    template: `
    <router-outlet></router-outlet>
`,
    styleUrls: ['./app.component.css']
})

export class AppComponent {

}
