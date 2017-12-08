import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { EventsAppComponent } from './events-app.component';
// import {
//     EventsListComponent,
//     EventThumbnailComponent,
//     EventService,
//     EventDetailsComponent
// } from './events/index'

import { NavBarComponent, appRoutes } from './nav/index';
import { ToastrService } from './common/index';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventService } from './events/shared/event.service';


@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        NavBarComponent
    ],
    providers: [EventService, ToastrService],
    bootstrap: [EventsAppComponent]
})
export class AppModule { }
