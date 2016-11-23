import { Component } from '@angular/core';
import '../assets/css/styles.css';

import { AuthService } from './auth';

@Component({
    selector: 'app',
    template: '<router-outlet></router-outlet>',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    constructor(private authService: AuthService) { }

    ngOnInit(): void {
        this.authService.getUser().then(user => console.log(user));
    }
}
