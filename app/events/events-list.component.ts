import { Component, OnInit } from '@angular/core';
//import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { IEvent } from './shared/event.model';
import { EventService } from './shared/event.service';


@Component({
    template: `
    <div>
        <h1> Upcoming Angular 2 Events </h1>
        <hr>
        <div class="row">
            <div class="col-md-6" *ngFor="let event of events" >
                <event-thumbnail (click) = "handleThumbnailClick(event.name)"
                [event]="event"></event-thumbnail>
            </div>
        </div>
        
    </div>
    `
})
export class EventsListComponent implements OnInit {
    events: IEvent[];
    constructor(private eventService: EventService,
    private toastrService: ToastrService) {

    }
    
    ngOnInit() {
        this.events = this.eventService.getEvents();
    }

    handleThumbnailClick(eventName){
            this.toastrService.info(eventName);
    }
}