import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { AboutComponent } from './about';
import { HeaderComponent } from './header';
import { HomeComponent } from './home';
import { WorksComponent } from './works';
import { MainSliderComponent } from './main-slider';
import { SkillsComponent } from './skills';
import { ExperienceComponent } from './experience';
import { EducationComponent } from './education';
import { TechnologiesComponent } from './technologies';
import { FeedbackComponent } from './feedback';
import { BlogComponent } from './blog';
import { InterestComponent } from './interest';
import { ContactComponent } from './contact';
import { SidebarComponent } from './sidebar';


import { HeaderDirective } from './header/header.directive';

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
        HeaderComponent,
        HomeComponent,
        WorksComponent,
        MainSliderComponent,
        SkillsComponent,
        ExperienceComponent,
        EducationComponent,
        TechnologiesComponent,
        FeedbackComponent,
        BlogComponent,
        InterestComponent,
        ContactComponent,
        HeaderDirective,
        SidebarComponent
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
