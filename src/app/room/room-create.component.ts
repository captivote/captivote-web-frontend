import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { RoomService } from '../../api/room/room.service';

@Component({
  selector: 'app-room-create',
  templateUrl: './room-create.component.html',
  styleUrls: ['./room-create.component.css']
})
export class RoomCreateComponent {
  roomCreateForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private roomService: RoomService) {
    this.roomCreateForm = this.fb.group({
      name: ['', Validators.required],
      user_limit: ''
    });
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
