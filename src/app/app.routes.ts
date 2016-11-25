import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { ArticleComponent } from './article';

export const ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: '',
                children: [
                    { path: 'a', component: AboutComponent },
                    { path: '', component: AboutComponent }
                ],
            }
        ]
    },
    {
        path: 'article/:id',
        component: ArticleComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: '**',
        redirectTo: ''
    },
];