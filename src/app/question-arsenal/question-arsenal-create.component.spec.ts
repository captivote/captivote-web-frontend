import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionArsenalCreateComponent } from './question-arsenal-create.component';

describe('QuestionArsenalCreateComponent', () => {
  let component: QuestionArsenalCreateComponent;
  let fixture: ComponentFixture<QuestionArsenalCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionArsenalCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionArsenalCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
