import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RoomService } from '../../api/room/room.service';
import { IRoom } from '../../api/room/room.interfaces';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  protected room: IRoom;

  constructor(private route: ActivatedRoute,
              private roomService: RoomService) { }

  ngOnInit() {
    const name_owner = this.route.snapshot.paramMap.get('name_owner');
    const [name, owner] = name_owner.split('_');

    this.roomService
      .read({ name, owner })
      .subscribe(room => this.room = room);
  }
}
