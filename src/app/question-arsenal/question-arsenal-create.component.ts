import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-arsenal-create',
  templateUrl: './question-arsenal-create.component.html',
  styleUrls: ['./question-arsenal-create.component.css']
})
export class QuestionArsenalCreateComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  createQuestionArsenal() {
    console.info('createQuestionArsenal');
  }
}
