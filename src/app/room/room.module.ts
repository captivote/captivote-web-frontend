import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialImportModule } from '../material-import/material-import.module';

import { roomRoutes } from './room.routes';
import { RoomComponent } from './room.component';
import { RoomCreateComponent } from './room-create.component';
import { RoomService } from '../../api/room/room.service';

@NgModule({
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(roomRoutes),
    FormsModule, ReactiveFormsModule,
    MaterialImportModule, FlexLayoutModule
  ],
  providers: [RoomService],
  declarations: [RoomComponent, RoomCreateComponent]
})
export class RoomModule { }
