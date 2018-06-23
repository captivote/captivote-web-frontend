import { Routes } from '@angular/router';

import { RoomComponent } from './room.component';
import { RoomCreateComponent } from './room-create.component';


export const roomRoutes: Routes = [
  { path: '', component: RoomComponent },
  { path: 'create', component: RoomCreateComponent }
];
