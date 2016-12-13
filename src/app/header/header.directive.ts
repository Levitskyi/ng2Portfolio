import { Directive, ElementRef, Input, Renderer } from '@angular/core';

declare var $: any;

@Directive({ selector: '[header]' })

export class HeaderDirective {
    isAdd: boolean = false;
    headerHeight: number;
    menuItems: any;
    scrollItems: any;
    lastId: number;

    constructor(private el: ElementRef, private renderer: Renderer) {
    }

    ngOnInit() {
        this.headerHeight = 60;
        this.menuItems = $('#nav').find('a');

        this.scrollItems = this.menuItems.map((index:number, elem:any)=>{
            let item = $($(elem).attr('href'));
            if(item.length) return item;
        });

        window.addEventListener("scroll", (e) => {
            this.toggleHeader();
            this.menuScrollSpy();
        });

        this.activeMenu();
    }

    private toggleHeader() {
        if(window.pageYOffset > 0) {
            this.isAdd = true;
        } else {
            this.isAdd = false;
        }
        this.renderer.setElementClass(this.el.nativeElement, 'animate-header', this.isAdd);
    }

    private activeMenu() {

        this.menuItems.click((e:any) => {
            let elem = $($(e.target).attr('href'));
            let offsetTop = elem.length ? elem.offset().top - this.headerHeight +1: window.scrollY;
            $('html, body').stop().animate({
                scrollTop: offsetTop
            }, 300);
            e.preventDefault();
        });
    }


    private menuScrollSpy() {
        var fromTop = $(window).scrollTop() + this.headerHeight;

        // Get id of current scroll item
        var cur = this.scrollItems.map(function(index:number, elem:any){
            if ($(elem).offset().top < fromTop)
                return elem;
        });

        // Get the id of the current element
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";

        if (this.lastId !== id) {
            this.lastId = id;
            // Set/remove active class
            this.menuItems
                .parent().removeClass("active")
                .end().filter("[href='#"+id+"']").parent().addClass("active");
        }
    }




}