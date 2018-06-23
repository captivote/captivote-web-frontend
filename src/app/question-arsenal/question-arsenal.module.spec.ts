import { QuestionArsenalModule } from './question-arsenal.module';

describe('QuestionArsenalModule', () => {
  let questionArsenalModule: QuestionArsenalModule;

  beforeEach(() => {
    questionArsenalModule = new QuestionArsenalModule();
  });

  it('should create an instance', () => {
    expect(questionArsenalModule).toBeTruthy();
  });
});
