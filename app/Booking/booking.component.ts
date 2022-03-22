import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/model/Booking';
import { User } from 'src/app/model/User';

import { Room } from 'src/app/model/Room';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
booking:Booking = new Booking();
  constructor( private id:number,
               private room:Room,
               private user:User,
               private purpose:string,
               private participants:number) { }

  ngOnInit() {
  }
  performBooking(){
    
  }

}
