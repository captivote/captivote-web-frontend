import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatListModule, MatMenuModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule {}
