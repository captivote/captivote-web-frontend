import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialImportModule } from '../material-import/material-import.module';

import { QuestionArsenalComponent } from './question-arsenal.component';
import { questionArsenalRoutes } from './question-arsenal.routes';
import { QuestionArsenalCreateComponent } from './question-arsenal-create.component';


@NgModule({
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(questionArsenalRoutes), FormsModule, ReactiveFormsModule,
    FlexLayoutModule, MaterialImportModule
  ],
  declarations: [QuestionArsenalComponent, QuestionArsenalCreateComponent]
})
export class QuestionArsenalModule {}
