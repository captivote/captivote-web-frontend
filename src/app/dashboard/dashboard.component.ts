import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  cards = [
    { title: 'Running games', cols: 1, rows: 1 },
    { title: 'Recent activity', cols: 1, rows: 2 },
    { title: 'High scores', cols: 1, rows: 1 }
  ];
}
