import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.html'
})

export class HeaderComponent {
    showSidebar: boolean = false;

    @Output() emitOpenSidebar: EventEmitter<any> = new EventEmitter();

    openSidebar() {
        this.emitOpenSidebar.emit(true);
    }
}