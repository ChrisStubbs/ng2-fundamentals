import{ Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
   template:`
   <h1>New Event</h1>
   <hr>
   <div>
        <h3> [Create Event Form will go here]</h3>
        <br/>
        <br/>
        <button type ="xubmit" class ="btn btn-primary">Save</button>
        <button type ="button" class ="btn btn-default" (click)="cancel()">Cancel</button>
   </div>
   `
})
export class CreateEventComponent{
    public isDirty: boolean = true;
     constructor(private router: Router){

     }

     private cancel(){
         this.router.navigate(['/events']);
     }
}