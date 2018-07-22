import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialImportModule } from '../material-import/material-import.module';

import { QuestionArsenalComponent } from './question-arsenal.component';
import { questionArsenalRoutes } from './question-arsenal.routes';
import { QuestionArsenalCreateComponent, QuestionsCreatorComponent } from './question-arsenal-create.component';
import { PrismModule } from '@sgbj/angular-prism';
import { MonacoEditorModule } from 'ngx-monaco-editor';


@NgModule({
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(questionArsenalRoutes), FormsModule, ReactiveFormsModule,
    FlexLayoutModule,
    MaterialImportModule,
    PrismModule,
    MonacoEditorModule.forRoot()
  ],
  entryComponents: [QuestionsCreatorComponent],
  declarations: [QuestionArsenalComponent, QuestionArsenalCreateComponent, QuestionsCreatorComponent]
})
export class QuestionArsenalModule {}
