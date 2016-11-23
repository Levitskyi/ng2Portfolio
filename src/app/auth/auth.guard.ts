import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(): Promise<boolean> {
        if (2 < 1) {
            this.router.navigate(['/login']);
            return Promise.resolve(false);
        }
        return Promise.resolve(true);
    }
}