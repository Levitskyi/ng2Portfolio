import { Component } from '@angular/core';

import 'owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
declare var $:any;

@Component({
    selector: 'technologies',
    templateUrl: './technologies.html'
})

export class TechnologiesComponent {

    ngOnInit(){
        $('.owl-carousel').owlCarousel();
    }

}