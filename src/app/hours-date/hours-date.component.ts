import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'buzzfeed-app-hours-date',
  templateUrl: './hours-date.component.html',
  styleUrls: ['./hours-date.component.css']
})
export class HoursDateComponent {

  //hours_date = `2023-01-23 | Time 10:00:00.000`;
   hours_date = new Date(); //'2023-01-23T10:00:00.000'
}
