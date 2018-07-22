import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';

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
              public dialog: MatDialog,
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

  openDialog(): void {
    const data: {[key: string]: string} = {
      height: `${window.innerHeight * .8}px`,
      width: `${window.innerWidth}px`,
      value: this.arsenalCreateForm.value.content
    };
    const dialogRef = this.dialog.open(QuestionsCreatorComponent, Object.assign({ data }, data));

    dialogRef.afterClosed().subscribe(result =>
      this.arsenalCreateForm.patchValue({ content: result })
    );
  }
}

// monaco-editor { height: 500px; display:block; }
@Component({
  selector: 'app-questions-creator',
  templateUrl: './questions-creator.component.html'
})
export class QuestionsCreatorComponent {
  value: string;

  constructor(
    public dialogRef: MatDialogRef<QuestionsCreatorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {[key: string]: string}) {
    if (data.value) this.value = data.value;
  }

  onNoClick(): void {
    this.dialogRef.close(this.value);
  }

}
