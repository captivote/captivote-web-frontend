import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RoomService } from '../../api/room/room.service';
import { Router } from '@angular/router';
import { IRoom } from '../../api/room/room.interfaces';

@Component({
  selector: 'app-room-create',
  templateUrl: './room-create.component.html',
  styleUrls: ['./room-create.component.css']
})
export class RoomCreateComponent implements OnInit {
  roomCreateForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private roomService: RoomService) {
    this.roomCreateForm = this.fb.group({
      name: ['', Validators.required],
      user_limit: ''
    });
  }

  ngOnInit() {
  }

  createRoom() {
    this.roomService
      .create(this.roomCreateForm.value)
      .subscribe(room => {
        const route = `${room.name}_${room.owner}`;
        this.roomService.rooms.set(route, room);
        this.router.navigateByUrl(`/room/${route}`).then(console.info);
      });
  }
}
