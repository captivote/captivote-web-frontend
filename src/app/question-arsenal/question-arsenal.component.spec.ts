import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionArsenalComponent } from './question-arsenal.component';

describe('QuestionArsenalComponent', () => {
  let component: QuestionArsenalComponent;
  let fixture: ComponentFixture<QuestionArsenalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionArsenalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionArsenalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
