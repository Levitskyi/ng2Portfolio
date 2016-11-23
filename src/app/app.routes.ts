import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { LoginComponent } from './login';
import { ArticleComponent } from './article';

import { AuthGuard } from './auth';

export const ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                children: [
                    { path: 'a', component: AboutComponent },
                    { path: 'b', component: LoginComponent },
                    { path: '', component: AboutComponent }
                ],
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'article/:id',
        component: ArticleComponent
    },
    {
        path: 'about',
        component: AboutComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        redirectTo: ''
    },
];