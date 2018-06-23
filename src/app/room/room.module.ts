import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialImportModule } from '../material-import/material-import.module';

import { roomRoutes } from './room.routes';
import { RoomComponent } from './room.component';
import { RoomCreateComponent } from './room-create.component';

@NgModule({
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(roomRoutes), FormsModule,
    MaterialImportModule, FlexLayoutModule
  ],
  declarations: [RoomComponent, RoomCreateComponent]
})
export class RoomModule { }
