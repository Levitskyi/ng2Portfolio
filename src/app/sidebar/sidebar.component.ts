import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.html'
})

export class SidebarComponent {

    @Output() emitCloseSidebar: EventEmitter<any> = new EventEmitter();

    closeSidebar() {
        this.emitCloseSidebar.emit(false);
    }
}