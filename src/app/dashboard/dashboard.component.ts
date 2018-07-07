import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ObservableMedia } from '@angular/flex-layout';

import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { RoomService } from '../../api/room/room.service';
import { IRoom } from '../../api/room/room.interfaces';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterContentInit {
  public cols: Observable<number>;
  public rooms: IRoom[];

  @Input() title: string;
  homepage: boolean;

  constructor(private observableMedia: ObservableMedia,
              private router: Router,
              private roomService: RoomService) {}

  ngOnInit() {
    this.gridSetup();
    this.homepage = this.router.url === '/';
    if (this.homepage)
      this.title = 'Vote on images, compete with friends';
  }

  ngAfterContentInit() {
    /* tslint:disable:no-unused-expression */
    this.homepage && this.roomService.getAll().subscribe(rooms =>
      this.rooms = rooms
    );
  }

  private gridSetup() {
    const grid = new Map([
      ['xs', 1], ['sm', 2], ['md', 2], ['lg', 2], ['xl', 2]
    ]);
    let start: number;
    grid.forEach((cols, mqAlias) => {
      if (this.observableMedia.isActive(mqAlias)) {
        start = cols;
      }
    });
    this.cols = this.observableMedia.asObservable()
      .pipe(
        map(change => grid.get(change.mqAlias)),
        startWith(start)
      );
  }
}
