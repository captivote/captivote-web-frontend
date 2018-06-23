import { Routes } from '@angular/router';

import { QuestionArsenalComponent } from './question-arsenal.component';
import { QuestionArsenalCreateComponent } from './question-arsenal-create.component';

export const questionArsenalRoutes: Routes = [
  { path: '', component: QuestionArsenalComponent },
  { path: 'create', component: QuestionArsenalCreateComponent }
];
