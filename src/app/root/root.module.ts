import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RootComponent } from './root.component';
import { rootRoutes } from './root.routes';
import { DashboardModule } from '../dashboard/dashboard.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(rootRoutes),
    DashboardModule
  ],
  declarations: [RootComponent]
})
export class RootModule {}
