import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';

import { AuthGuard, AuthService } from './auth';

import { AppComponent } from './app.component';
import { AboutComponent } from './about';
import { ArticleComponent } from './article';
import { HeaderComponent } from './header';
import { HomeComponent } from './home';
import { LoginComponent } from './login';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(ROUTES, { useHash: false })
    ],
    declarations: [
        AppComponent,
        AboutComponent,
        ArticleComponent,
        HeaderComponent,
        HomeComponent,
        LoginComponent
    ],
    providers: [
        AuthGuard,
        AuthService
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
