import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import {WorksComponent} from './works';
import {MainSliderComponent} from './main-slider';

export const ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: '',
                children: [
                    { path: 'works', component: WorksComponent },
                    { path: 'main-slider', component: MainSliderComponent }
                ],
            }
        ]
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'works/:id',
        component: WorksComponent
    },
    {
        path: '**',
        redirectTo: ''
    },
];