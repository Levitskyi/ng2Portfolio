import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
<nav>
    <span>
        <a [routerLink]=" ['./'] " routerLinkActive="active">
          Home
        </a>
      </span>
    |
    <span>
        <a [routerLink]=" ['./about'] " routerLinkActive="active">
          About
        </a>
      </span>
    |
    <span>
        <a [routerLink]=" ['./article', 5] " routerLinkActive="active">
          Article 5
        </a>
      </span>
</nav>
`
})

export class HeaderComponent {}