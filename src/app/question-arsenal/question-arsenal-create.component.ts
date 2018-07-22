import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { IRoom } from '../../api/room/room.interfaces';
import { RoomService } from '../../api/room/room.service';

@Component({
  selector: 'app-question-arsenal-create',
  templateUrl: './question-arsenal-create.component.html',
  styleUrls: ['./question-arsenal-create.component.css']
})
export class QuestionArsenalCreateComponent implements OnInit {
  arsenalCreateForm: FormGroup;
  rooms: IRoom[];

  constructor(private fb: FormBuilder,
              private router: Router,
              private roomService: RoomService) {
    this.arsenalCreateForm = this.fb.group({
      name: ['', Validators.required],
      room_id: '',
      content: ['', Validators.required],
      timer: [null, [Validators.min(1), Validators.max(7.884e+6 /*3 months*/)]],
    });
  }

  ngOnInit() {
    this.roomService
      .getAll()
      .subscribe(rooms => this.rooms = rooms);
  }

  createQuestionArsenal() {
    console.info('createQuestionArsenal::arsenalCreateForm.value', this.arsenalCreateForm.value, ';');
  }
}
