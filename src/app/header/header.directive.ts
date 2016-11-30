import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({ selector: '[header]' })

export class HeaderDirective {
    constructor(private el: ElementRef, private renderer: Renderer) {
    }

    ngOnInit() {
        this.windowScroll();
    }

    private windowScroll() {
        let isAdd: boolean = false;
        window.addEventListener("scroll", (e) => {
            if(window.pageYOffset > 0) {
                isAdd = true;
            } else {
                isAdd = false;
            }
            this.renderer.setElementClass(this.el.nativeElement, 'animate-header', isAdd);
        });
    }
}